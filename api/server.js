// server configs
const express = require("express")
const app = express()
const routes = require("./routes")
const db = require("./db/index")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const {Favorites, Users} = require("./db/models/index");


// significa que vamos a user router
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(
  sessions({
    secret: "bootcamp",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      Users.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            // email not found
            return done(null, false);
          }

          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false); // wrong password
            }

            return done(null, user); // success :D
          });
        })
        .catch(done); // done(err)
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  Users.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

app.use("/api",routes)

app.use((err,req,res,next) => {
    res.sendStatus(404).send(err)
})

db.sync({force: true})
.then(() => {
  const port = 3001
  app.listen(port,() => {
    console.log(("Escuchando en el puerto " + port))
    db.authenticate().then(()=>{
      console.log(">>>>>>>>>>Estamos contentados a la base de datos<<<<<<<<<<")
    }).catch((error) =>{
      console.log("Error en la conexion" + error)
    })
  })
})
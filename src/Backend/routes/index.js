const express = require("express")
const Users = require("../../../db/users")
const Favorites = require("../../../db/favorites")
const router = express.Router()
const passport = require("passport");


//-----------------Users-----------------//
//envia un msj de bienvenida
router.get("/", (req,res,next) => {
    res.send("bienvenido")
})
//busca todos los usuarios
router.get("/register", (req,res,next) => {
    Users.findAll()
    .then(users => res.send(users))
})
//busca un usuario por ID
router.get("/register/:id", (req,res,next) => {
    const user = req.params.id
    Users.findByPk(user)
    .then(user => res.send(user))
})
//crea un usuario
router.post("/register", (req,res,next) => {
    console.log("caiste en la ruta del post")
    console.log(req.body)
    Users.create({
        email: req.body.email,
        password: req.body.password
    })
    .then(() => {
        res.status(201).send("Usuario agregado a la base de datos")
    })
})


//-----------------Favorites-----------------//
//msj de bienvenida
router.get("/favorites", (req,res,next) => {
    res.send("estas conectado a la tabla de favoritos")
})
//mostrar peliculas favoritas de un usuario
router.get("/favorites/:user", (req,res,next) => {
    const movies = req.params.user
    Favorites.findByPk(movies)
    .then(movie => res.send(movie))

    // Favorites.findAll()
    // .then(movies => res.send(movies))

})
//ingresar una pelicula favorita al usuario
router.post("/favorites/:user", (req,res,next) => {
    console.log(req.body)
    Favorites.create({
        nameMovie: req.body.nameMovie,
    })
    .then(() => {
        res.status(201).send("Pelicula agregada a la base de datos")
    })
})


//-----------------Register & Login-----------------//
router.post("/login", passport.authenticate("local"), (req, res) => {
    res.send(req.user);
})
//en caso de que exista el usuario logeado
router.get("/secret", (req, res) => {
    if (req.user) {
      res.send("Bienvenido" + req.user);
    } else {
      res.sendStatus(401);
    }
})
//desarma la cookie
router.post("/logout", (req, res) => {
    req.logOut();
    res.sendStatus(200);
})
router.get("/me", (req, res) => {
    if (!req.user) {
      return res.sendStatus(401);
    }
    res.send(req.user);
})
router.use("/", function (req, res) {
    res.sendStatus(404);
})

module.exports = router


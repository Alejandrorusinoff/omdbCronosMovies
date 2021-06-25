const db = require("./index");
const S = require("sequelize");

class Favorites extends S.Model {}
    Favorites.init({ 
        nameMovie: {
            type: S.STRING,
            allowNull: false,
        },
    }, 
{ sequelize: db, modelName: "favorite" });

module.exports = Favorites;


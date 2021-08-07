const Users = require("./users");
const Favorites = require("./favorites");

Users.belongsToMany(Favorites, {through: 'UsersFavorites'})
Favorites.belongsToMany(Users, {through: 'UsersFavorites'})

module.exports= {Users, Favorites}
const Sequelize = require("sequelize");

const sequelize = new Sequelize('postgres://alejandro@localhost/omdb', {
    logging: false, // saca el console.log a todas las consultas
    dialect: "postgres"
}) 

module.exports = sequelize;
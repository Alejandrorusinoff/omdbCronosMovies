"use strict";
const db = require("../index");
const S = require("sequelize");
const bcrypt = require("bcrypt");

class Users extends S.Model {
    hash(password, salt) {
        return bcrypt.hash(password, salt);
    }
}  
    Users.init({ 
        name: {
            type: S.STRING,
            allowNull: false,
        },
        lastName: {
            type: S.STRING,
            allowNull: false,
        },
        genero: {
            type: S.STRING,
            allowNull: false,
        },
        age: {
            type: S.INTEGER,
            allowNull: false,
        },
        email: {
            type: S.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: S.STRING,
            allowNull: false,
        },
        salt: {
            type: S.STRING,
          },
    }, 
{ sequelize: db, modelName: "user" });

Users.beforeCreate((user) => {
    return bcrypt.genSalt(16)
        .then((salt) => {
        user.salt = salt;
        return user.hash(user.password, salt);
            })
        .then((hash) => {
        user.password = hash;
    });
});

module.exports = Users;
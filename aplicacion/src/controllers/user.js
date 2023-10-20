const user = require ('../data/user.json');
const path = require('path');
const fs = require('fs');

const userController = {

    //listado de usuarios
    user: function (req, res){
        res.render('./user/user');
    },
    register: function (req, res){
        res.render('./user/registro');
    },
    login: function (req, res){
        res.render('./user/login');
    },    
    password: function (req, res){
        res.render('./user/restablecer-clave');
    },
}

module.exports = userController;
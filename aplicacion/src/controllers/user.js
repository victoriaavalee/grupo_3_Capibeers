const path = require('path');
const fs = require('fs');

function userController (req, res) {
    res.render('./user/user'); 
};

const registroController =  (req, res) => {
    res.render('./user/registro');
};    

const loginController =  (req, res) => {
    res.render('./user/login');
};

const restablecerClaveController =  (req, res) => {
    res.render('./user/restablecer-clave');
};

module.exports = {userController,registroController,loginController,restablecerClaveController};
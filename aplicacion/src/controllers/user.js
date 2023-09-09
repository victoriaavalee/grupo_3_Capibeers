const path = require('path');

const userController =  (req, res) => {
    res.render('./user/user'); //no existe, llevaria a un area de perfil
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
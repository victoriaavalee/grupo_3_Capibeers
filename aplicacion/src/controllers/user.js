const path = require('path');

const userController =  (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/user/user.html'));
};

const loginController =  (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/user/login.html'));
};

const registroController =  (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/user/registro.html'));
};

const restablecerClaveController =  (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/user/restablecer-clave.html'));
};


module.exports = {userController,loginController,registroController,restablecerClaveController};
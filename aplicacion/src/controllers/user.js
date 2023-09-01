const userController =  (req, res) => {
    res.render('./user/user');
};

const loginController =  (req, res) => {
    res.render('./user/login');
};

const registroController =  (req, res) => {
    res.render('./user/registro');
};

const restablecerClaveController =  (req, res) => {
    res.render('./user/restablecer-clave');
};

module.exports = {userController,loginController,registroController,restablecerClaveController};
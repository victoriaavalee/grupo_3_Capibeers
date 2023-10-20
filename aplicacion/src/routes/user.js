const express = require ('express');
const userController = require('../controllers/user')
const userRouter = express.Router();


userRouter.get('/', userController.user); //aqui iria el perfil de usuario
userRouter.get('/login', userController.login);
userRouter.get('/registro', userController.register);
userRouter.get('/restablecer-clave', userController.password);


module.exports = userRouter;
const express = require ('express');
const {userController, loginController, registroController,restablecerClaveController}= require('../controllers/user')

const userRouter = express.Router();

userRouter.get('/', userController); //aqui iria el perfil de usuario
userRouter.get('/login', loginController);
userRouter.get('/registro', registroController);
userRouter.get('/restablecerClave', restablecerClaveController);
//userRouter.get('/perfil', listProductsController);


module.exports = userRouter;
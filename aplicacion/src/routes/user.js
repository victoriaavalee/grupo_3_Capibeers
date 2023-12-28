const express = require ('express');
const userController = require('../controllers/user');
const userRouter = express.Router();
const upload = require('../middleware/usersMulter');
const userValidationRegister = require('../middleware/userValidationRegister')

//Rutas
userRouter.get('/profile/:id', userController.profile);
userRouter.post('/profile/:id', userController.profileDelete);
userRouter.get('/login', userController.login);
userRouter.post('/login', userController.loginPost);
userRouter.post('/logout', userController.logoutPost);
userRouter.get('/register', userController.register);
userRouter.post('/register', upload.single("image"), userValidationRegister, userController.registerPost);
userRouter.get('/restorePassword', userController.restorePassword); //falta cambiar clave segun correo o por Id
userRouter.get('/list', userController.list);
userRouter.get('/search', userController.search); //no sirve
userRouter.get('/edit/:id', userController.edit);
userRouter.put('/edit/:id', upload.single("image"), userController.editPut);

module.exports = userRouter;
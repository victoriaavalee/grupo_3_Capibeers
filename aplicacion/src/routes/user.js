const express = require ('express');
const userController = require('../controllers/user');
const userRouter = express.Router();
//Middlewares
const upload = require('../middleware/usersMulter');
const userValidationRegister = require('../middleware/userValidationRegister');
const userValidationLogin = require('../middleware/userValidationLogin');
//validacion de user logueado o no
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

//Rutas
userRouter.get('/register', guestMiddleware, userController.register);
userRouter.post('/register', upload.single("image"), userValidationRegister, userController.registerPost);
userRouter.get('/login', guestMiddleware, userController.login);
userRouter.post('/login', userValidationLogin, userController.loginPost);
userRouter.post('/logout', userController.logoutPost);
userRouter.get('/profile', authMiddleware, userController.profile);

userRouter.get('/list', userController.list);

//falta
userRouter.post('/profile', userController.profileDelete);


userRouter.get('/restorePassword', userController.restorePassword); //falta cambiar clave segun correo o por Id
userRouter.get('/search', userController.search); //no sirve
userRouter.get('/edit/:id', userController.edit);
userRouter.put('/edit/:id', upload.single("image"), userController.editPut);

module.exports = userRouter;
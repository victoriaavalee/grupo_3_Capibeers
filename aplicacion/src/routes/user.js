const express = require ('express');
const userController = require('../controllers/user');
const userRouter = express.Router();
const upload = require('../middleware/usersMulter');
const userValidationRegister = require('../middleware/userValidationRegister')


//Rutas
userRouter.get('/profile/:id', userController.profile);
userRouter.post('/profile/:id', userController.profileDelete);
userRouter.get('/login', userController.login); //falta que envie info a algun lugar y la valide
userRouter.get('/register', userController.register);
userRouter.post('/register', upload.single("image"), userValidationRegister, userController.registerPost);
userRouter.get('/restorePassword', userController.restorePassword); //falta cambiar clave segun correo o por Id
userRouter.get('/list', userController.list);
userRouter.get('/search', userController.search); //Falta / Actualizacion: creo que no es necesario :p
userRouter.get('/edit/:id', userController.edit);
userRouter.put('/edit/:id', upload.single("image"), userController.editPut);


module.exports = userRouter;
const express = require ('express');
const userController = require('../controllers/user');
const userRouter = express.Router();
const upload = require('../middleware/usersMulter');
const { body, check } = require('express-validator');

//Validaciones          //validar que el cmapo este lleno "- Vaalidar que el cmapo tenga la info esperada :)"
const validateRegisterForm = [
    check('email')
        .notEmpty().withMessage('Debe completar el campo de email').bail()
        .isEmail().withMessage('Debe completar el campo con un email válido'),
    check('name')
        .notEmpty().withMessage('Debe completar el campo de nombre').bail()
        .isLength({min:3}).withMessage('El nombre debe ser mas largo'),
    check('lastName')
        .notEmpty().withMessage('Debe completar el campo de apellido').bail()
        .isLength({min:3}).withMessage('El apellido debe ser mas largo'),
    check('birthdate')
        .notEmpty().withMessage('Debes completa el campo de fecha de nacimiento'),
    check('password')
        .notEmpty().withMessage('Debes completa el campo de contraseña').bail()
        .isLength({min:5}).withMessage('La contraseña debe tener mínimo 5 caracteres'),
    check('confPassword')
        .notEmpty().withMessage('Debes completa el campo de confirmación de contraseña').bail()
        .isLength({min:5}).withMessage('La confirmación de contraseña debe tener mínimo 5 caracteres'),
];


//Rutas
userRouter.get('/profile/:id', userController.profile);
userRouter.post('/profile/:id', userController.profileDelete);
userRouter.get('/login', userController.login); //falta que envie info a algun lugar y la valide
userRouter.get('/register', userController.register);
userRouter.post('/register', upload.single("image"), validateRegisterForm, userController.registerPost);
userRouter.get('/restorePassword', userController.restorePassword); //falta cambiar clave segun correo o por Id
userRouter.get('/list', userController.list);
userRouter.get('/search', userController.search); //Falta
userRouter.get('/edit/:id', userController.edit);
userRouter.put('/edit/:id', upload.single("image"), userController.editPut);


module.exports = userRouter;
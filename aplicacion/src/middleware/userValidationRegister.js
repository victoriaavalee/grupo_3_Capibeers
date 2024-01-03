const { check } = require('express-validator');
const path = require ('path');

const validateRegisterForm = [
    check('email')
        .notEmpty().withMessage('Debe completar el campo de email').bail()
        .isEmail().withMessage('Debe completar el campo email con un email válido'),
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
    check('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg",".png"];
        if(!file){
            throw new Error("Debe subir una imagen.")
        }else{
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error("Las extensiones de archivo permitidas son .jpg y .png")
            }
        }
        return true
    }).bail()
];

module.exports = validateRegisterForm;
const { check } = require('express-validator');

const validateLoginForm = [
    check('email')
        .notEmpty().withMessage('Debe completar el campo de email').bail()
        .isEmail().withMessage('Debe completar el campo email con un email válido'),
    check('password')
        .notEmpty().withMessage('Debes completa el campo de contraseña').bail()
        .isLength({min:5}).withMessage('La contraseña debe tener mínimo 5 caracteres'),
];

module.exports = validateLoginForm;
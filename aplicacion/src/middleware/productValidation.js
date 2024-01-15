const { check } = require('express-validator');

const validateFormCreate = [
    check('name')
        .notEmpty().withMessage('Nombre del Producto es requerido').bail(),
    check('price')
        .notEmpty().withMessage('Precio es requerido').bail()
        .isNumeric().withMessage('Debe ser un número'),
    check('description')
        .notEmpty().withMessage('Nombre del Producto es requerido').bail(),
    check('volume')
        .notEmpty().withMessage('Descripción es requerido'),
    check('volume')
        .notEmpty().withMessage('Volumen de la unidad es requerida').bail()
        .isNumeric().withMessage('Debe ser un número'),
];

module.exports = validateFormCreate;
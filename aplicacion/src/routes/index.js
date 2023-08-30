const express = require ('express');
const indexController =  require ('../controllers/index');
const {listProductsController}= require('../controllers/products')
const startHomeController = require('../controllers/home');

const router = express.Router();

router.get('/', indexController);
router.get('/home', startHomeController);
router.get('/products', listProductsController);

//esto tiene que ir dentro de un USER 
//router.get('/login', startLoginController);
//router.get('/register', indexController);
module.exports = router; 
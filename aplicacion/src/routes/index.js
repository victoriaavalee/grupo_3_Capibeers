const express = require ('express');
const indexController=  require ('../controllers/index');
const listProductsController = require('../controllers/products');
const startHomeController = require('../controllers/home');

const router = express.Router();

router.get('/', indexController);
//router.get('/login', indexController);
//router.get('/register', indexController);
router.get('/products', listProductsController);
router.get('/home', startHomeController);

module.exports = router;  
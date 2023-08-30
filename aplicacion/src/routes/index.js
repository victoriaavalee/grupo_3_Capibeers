const express = require ('express');
const indexController =  require ('../controllers/index');
const {listProductsController}= require('../controllers/products')
const startHomeController = require('../controllers/home');
const {userController} = require('../controllers/user');

const router = express.Router();

router.get('/', indexController);
router.get('/home', startHomeController);
router.get('/products', listProductsController);
router.get('/user', userController);

module.exports = router; 
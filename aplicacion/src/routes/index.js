const express = require ('express');
const indexController =  require ('../controllers/index');
const productsController= require('../controllers/products')
const homeController = require('../controllers/home');
const {userController} = require('../controllers/user');

const router = express.Router();

router.get('/', indexController);
router.get('/home', homeController);
router.get('/products', productsController.list);//listado de productos
router.get('/user', userController); //perfil de usuario

module.exports = router; 
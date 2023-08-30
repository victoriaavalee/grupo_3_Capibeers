const express = require ('express');
const {listProductsController,buyProductController, detailProduct}= require('../controllers/products')
//const listProductsController = require ('../controllers/products')
//const buyProductController = require ('../controllers/products')

const productsRouter = express.Router();

productsRouter.get('/', listProductsController);
productsRouter.get('/comprar', buyProductController);
productsRouter.get('/:identificador', detailProduct);
//productsRouter.get('/editar', listProductsController);
//productsRouter.get('/crear', listProductsController);

module.exports = productsRouter;
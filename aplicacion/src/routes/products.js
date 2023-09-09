const express = require ('express');
const productsController = require('../controllers/products')
const productsRouter = express.Router();

//lista de productos
productsRouter.get('/', productsController.list); 

//detalle de producto NO ANDAN
productsRouter.get('/:id', productsController.detail);
productsRouter.delete('/delete/:id', productsController.delete);

//carrito SACAR
productsRouter.get('/carrito', productsController.carrito); 

//crear producto NO ANDAN
productsRouter.get('/crear', productsController.create); 
productsRouter.post('/crear', productsController.postCreate); 

//editar producto NO ANDA
productsRouter.get('/editar/:id', productsController.edit);
productsRouter.put('/editar', productsController.putEdit);

//comprar
//productsRouter.get('/comprar', productsController);
module.exports = productsRouter;

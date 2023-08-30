const express = require ('express');
let indexController = require ('../controllers');
const listProductsController = require ('../controllers/products')

const productsRouter = express.Router();

productsRouter.get('/', listProductsController);
productsRouter.get('/purchase', listProductsController);
productsRouter.get('/edit', listProductsController);
productsRouter.get('/create', listProductsController);

module.exports = productsRouter;


/*
router.get('/:idProducto', productosController.detalle);

router.get('/:idProducto/comentarios/:idComentario?', productosController.detalleComentarios);


*/

const express = require ('express');
const {listProductsController,buyProductController,carritoProductController,createProductController}= require('../controllers/products')
//const listProductsController = require ('../controllers/products')
//const buyProductController = require ('../controllers/products')

const productsRouter = express.Router();

productsRouter.get('/', listProductsController);
productsRouter.get('/comprar', buyProductController);
productsRouter.get('/carrito', carritoProductController);
productsRouter.get('/producto:identificador', listProductsController);
//productsRouter.get('/editar', listProductsController);
productsRouter.get('/crear', createProductController);
/*appe.get('/productos/id:Producto/comentraio/:idComentario?', function (req,res){
    res.send("Bienvenidos a los comentarios del producto " + req.params.idProducto + "y estas enfocado en el comentario "+ req.params.idComentario);
});
*/

module.exports = productsRouter;

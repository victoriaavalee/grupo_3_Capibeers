const express = require ('express');
const {listProductsController, detailProductController, createProductController,buyProductController,carritoProductController,}= require('../controllers/products')

const productsRouter = express.Router();

productsRouter.get('/', listProductsController); //lista de productos
productsRouter.get('/producto', detailProductController);//producto individual
productsRouter.get('/carrito', carritoProductController); //carrito
productsRouter.get('/crear', createProductController); //crear 
productsRouter.get('/comprar', buyProductController);//comprar


//productsRouter.get('/:id', listProductsController);//producto individual
/*ejemplo:
productsRouter.get('/', ProductsController.mostrarTodos)
productsRouter.get('/:id', ProductsController.mostrarPorId)
productsRouter.get('/', ProductsController.createProduct)
*/


/*appe.get('/productos/id:Producto/comentraio/:idComentario?', function (req,res){
    res.send("Bienvenidos a los comentarios del producto " + req.params.idProducto + "y estas enfocado en el comentario "+ req.params.idComentario);
});
*/

module.exports = productsRouter;

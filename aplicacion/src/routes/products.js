const express = require ('express');
const productsController = require('../controllers/products')
const productsRouter = express.Router();

//lista de productos
productsRouter.get('/', productsController.list); 

//detalle de producto
productsRouter.get('/:id', productsController.detail);
productsRouter.delete('/delete/:id', productsController.delete);

//carrito
productsRouter.get('/carrito', productsController.carrito); 

//crear producto
productsRouter.get('/crear', productsController.create); 
productsRouter.post('/crear', productsController.postCreate); 

//editar producto
productsRouter.get('/editar/:id', productsController.edit);
productsRouter.put('/editar', productsController.putEdit);

//comprar
//productsRouter.get('/comprar', productsController);

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

const express = require ('express');
const productsController = require('../controllers/products');
const productsRouter = express.Router();
const uploadFile = require('../middleware/productsMulter');

//Listado de productos
productsRouter.get('/', productsController.list); 


//Detalle de producto
//productsRouter.get('/:idProducto', function (req,res){
//    res.send('elegiste el producto ' + req.params.idProducto)
//});
//Detalle de comentario en un producto y comentario especifico
//productsRouter.get('/:idProducto/comentarios/:idComentario?', function (req,res){
//    if (req.params.idComentario == undefined){
//        res.send('Bienvenidos a los comentarios del producto '+ req.params.idProducto )
//    }else{
//        res.send('Bienvenidos a los comentarios del producto '+ req.params.idProducto + ' y esta enfocado en el comentario ' + req.params.idComentario)
//    }
//});


//Detalle de producto
//OPCION PAO
//productsRouter.get('/:id', productsController.detail);

//productsRouter.delete('/delete/:id', productsController.delete);


//carrito SACAR
productsRouter.get('/carrito', productsController.carrito); 


//crear producto NO ANDAN
productsRouter.get('/crear', productsController.create); 
//productsRouter.post('/crear',uploadFile.single("img"), productsController.postCreate); 


//editar producto NO ANDA
productsRouter.get('/editar/:id', productsController.edit);
//productsRouter.put('/editar',uploadFile.single("img"), productsController.putEdit);

module.exports = productsRouter;
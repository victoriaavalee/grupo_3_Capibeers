const express = require ('express');
const productsRouter = express.Router();
const productsController = require('../controllers/products');
const uploadFile = require('../middleware/productsMulter');

// Listado de productos
productsRouter.get('/', productsController.list);

// Carrito
productsRouter.get('/carrito', productsController.carrito);

// Crear producto
productsRouter.get('/crear', productsController.create);
productsRouter.post('/crear', uploadFile.single("image"), productsController.postCreate);

// Editar producto
productsRouter.get('/:id/editar', productsController.edit);
productsRouter.put('/:id/editar', uploadFile.single("image"), productsController.putEdit);

// Detalle de producto
// OPCION PAO
productsRouter.get('/:id', productsController.detail);

// Eliminar producto
productsRouter.delete('/:id', productsController.delete);

module.exports = productsRouter;
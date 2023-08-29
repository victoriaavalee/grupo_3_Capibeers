let express = require('express');
let productosController = require ('../controllers/productosController.js');
let router = express.Router();
/*
router.get('/', productosController.listado);
router.get('/:idCrear', productosController.crear);
*/

router.get('/:idProducto', productosController.detalle);

router.get('/:idProducto/comentarios/:idComentario?', productosController.detalleComentarios);

module.exports = router;
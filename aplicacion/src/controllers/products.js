const path = require('path');

const productsController =  (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/products.html'));
}

module.exports = productsController;



/*si va
let productosController ={
    listado: function () {},
    crear : function () {},
    detalle : function (req,res){
        res.send("Bienvenidos al detalle de producto" + req.params.idProducto)
    },
    detalleComentarios: function (req,res){
        if (req.params.idComentario ==undefined){
            res.send("Bienvenidos a los comentarios de producto" + req.params.idProducto);
        } else {
            res.send("Bienvenidos a los comentarios de producto" + req.params.idProducto + "y estas enfocado en el comentario" + req.params.idComentario);
        }
    },
}
*/
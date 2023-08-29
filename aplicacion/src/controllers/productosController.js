/*const controlador = {
    index: (req, res)=>{
        res.send('Index de productos');
    },
    show: hh,//mostrar detalle de producto,
    create: //enviar datos para agregar un producto,
};
*/

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
module.exports = productosController;
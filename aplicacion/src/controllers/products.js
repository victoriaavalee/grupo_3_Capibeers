const products = require ('../data/products.json');

const productsController = {

    //listado de productos
    list: function (req, res){
        res.render('./products/products');
    },

    //detalle de producto 
    detail: function (req, res){
        const detailId = +req.params.id;
        let description = products.find(p => p.id === detailId);
        res.render('./products/detalle-producto', {description});
    },

    delete: function (req, res){
        const productId = +req.params.id;
        let productDelete = products.find(p => p.id === productId);
        res.redirect('/products/detail')
    },

    //carrito
    carrito: function (req, res){
        res.render('./products/carrito');
    },

    //crear producto
    create: function (req, res){
        res.render('./products/create');
    },

    postCreate: function (req, res){
        const newProduct = req.body;

        res.redirect('/');
    },

    //editar producto
    edit: function (req, res){
        const productId = +req.params.id;
        let productEdit = products.find(p => p.id === productId);
        res.render('./products/edit-products', {productEdit})
    },

    putEdit: function (req,res){
        res.redirect('/products/')
    }
}



/*ejempplo
const controller ={
    mostrarTodos:(req,res)=>{
        logica a implementar
    },
    mostrarPorId: (req,res)=>{
        logica a implementar
    },
    createProduct:(req,res)=>{
        logica a implementar
    },
}
module.exports = controller;
*/



module.exports = productsController;


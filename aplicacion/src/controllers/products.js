const products = require ('../data/products.json');
const fs = require('fs');
const path = require('path');

const productsController = {

    //listado de productos
    list: function (req, res){
        res.render('./products/products',{products});
    },

    //detalle de producto 
//    detail: function (req, res){
//        const detailId = +req.params.id;
//        let productDetail = products.find(p => p.id === detailId);
//        res.render('./products/detalle-producto', {productDetail,products})
//    },
    detail: function (req, res) {
        const idBuscar = parseInt(req.params.id);
        let productDetail = products.find(b => b.id === idBuscar);
        res.render('./products/detalle-producto', {products, productDetail})
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

        res.redirect('/products/');
    },

    //editar producto
    edit: function (req, res){
        const productId = +req.params.id;
        let productEdit = products.find(p => p.id === productId);
        res.render('./products/edit-products', {productEdit})
    },

    putEdit: function (req,res){
        const productId = +req.params.id;
        const edit = req.body;
        res.redirect('/products/')
    }
}


module.exports = productsController;


const products = require ('../data/products.json');
const fs = require('fs');
const path = require('path');

function listProductsController (req, res) {
    res.render('./products/products', {
        products,
    }); 
};

function detailProductController (req, res) {
    res.render('./products/detalle-producto'); //producto individual
};

function carritoProductController (req, res) {
    res.render('./products/carrito');
};

function createProductController (req, res) {
    res.render('./products/create');
};

function buyProductController (req, res) {
    res.render('./products/comprar');
};



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
module.exports = controller;,
*/



module.exports = {listProductsController,detailProductController,createProductController,buyProductController,carritoProductController};


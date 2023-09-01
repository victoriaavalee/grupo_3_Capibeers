const path = require('path');

const listProductsController =  (req, res) => {
    res.render('./products/products');
};

const buyProductController =  (req, res) => {
    res.render('./products/comprar');
};

const carritoProductController =  (req, res) => {
    res.render('./products/carrito');
};

const detailProduct =  (req, res) => { //PRUEBA DE ID PARA PRODUCTOS
    const id = req.params.identificador;
    if (id === "comentarios"){ //http://localhost:8000/products/comentarios
        res.send(`<h1>Bienvenido a la secion de comentarios del producto </h1>`); 
    }else{
        res.send(`<h1>Estas viendo el producto con id ${id}</h1>`);
    }
};

module.exports = {listProductsController,buyProductController,carritoProductController,detailProduct};
//module.exports = listProductsController;
//module.exports = buyProductController;

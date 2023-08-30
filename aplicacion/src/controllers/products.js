const path = require('path');

const listProductsController =  (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/products/products.html'));
};

const buyProductController =  (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/products/comprar.html'));
};

const carritoProductController =  (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/products/carrito.html'));
};

const detailProduct =  (req, res) => {
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

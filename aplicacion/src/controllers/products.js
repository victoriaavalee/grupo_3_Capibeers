const products = require ('../data/products.json');

const listProductsController =  (req, res) => {
    res.render('./products/products'); //listado de productos
};

const detailProductController =  (req, res) => {
    res.render('./products/detalle-producto'); //producto individual
};

const carritoProductController =  (req, res) => {
    res.render('./products/carrito');
};

const createProductController =  (req, res) => {
    res.render('./products/create');
};

const buyProductController =  (req, res) => {
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
module.exports = controller;
*/



module.exports = {listProductsController,detailProductController,createProductController,buyProductController,carritoProductController};


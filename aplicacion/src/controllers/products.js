const path = require('path');

const listProductsController =  (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/products.html'));
};

const buyProductController =  (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/comprar.html'));
};

const detailProduct =  (req, res) => {
    const id = req.params.identificador;
    if (id === "secreto"){ //http://localhost:8000/products/secreto
        res.send(`<h1>me descubriste</h1>`); 
    }else{
        res.send(`<h1>Estas viendo el producto con id ${id}</h1>`);
    }
};

module.exports = {listProductsController,buyProductController,detailProduct};
//module.exports = listProductsController;
//module.exports = buyProductController;

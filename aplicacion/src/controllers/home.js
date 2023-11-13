const productsList = require ('../data/products.json');

const homeController = (req, res) => {
    res.render('home',{productsList});
};

module.exports = homeController;

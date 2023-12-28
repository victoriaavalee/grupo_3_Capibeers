const productsList = require ('../data/products.json');

const homeController = (req, res) => {
    console.log(req.cookies);
    res.render('home',{productsList});
};

module.exports = homeController;
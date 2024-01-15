const path = require('path');
const fs = require('fs');
let products = require ('../data/products.json');


const productsController = {

    //listado de productos
    list: function (req, res){
        res.render('./products/products', {products});
    },

    //detalle de producto 
    detail: function (req, res){
        const idProduct = +req.params.id;
        const productDetail = products.find((p) => p.id === idProduct);
        if (!productDetail) {
            // Manejar el caso en el que el producto no se encuentra
            return res.status(404).send('Producto no encontrado');
        }
        res.render('./products/detalle-producto', {productDetail, products})
    }, //este ta bien

    delete: function (req, res){
        const idProduct = +req.params.id;
        let fileProduct = products.find((p) => p.id == idProduct);
        let beer = path.join(__dirname,"../public/img" + fileProduct.image);
        if(fs.existsSync(beer)){
            fs.unlinkSync(beer);
        };
        products = products.filter((p) => p.id != idProduct);
        fs.writeFileSync('./src/data/products.json', JSON.stringify(products, null, 4), {encoding: 'utf-8'})
        res.redirect('/products')
    },//tmb funciona ;D

    //carrito
    carrito: function (req, res){
        res.render('./products/carrito',);
    },

   //crear producto
    create: function (req, res){
        res.render('./products/create');
    },

    postCreate: function (req, res){
        const newId = products[(products.length - 1)].id + 1;
        let file = req.file;
        const newProduct = {
            id: newId,
            //image: `${file.filename}`,
            name: req.body.name,
            price: req.body.price,
            mark: req.body.mark,
            style: req.body.style,
            gluten: req.body.gluten,
            packing: req.body.packing,
            volume: req.body.volume,
            origin: req.body.origin,
            artisanal: req.body.artisanal,
            alcohol: req.body.alcohol,
            ingredients: req.body.ingredients,
            description:req.body.description,
            image:`${file.filename}`,
        };
        products.push(newProduct);
            fs.writeFileSync(
                path.join(__dirname, "../data/products.json"),
                JSON.stringify(products, null, 3),
                {
                    encoding: 'utf-8',
                }
            );
        res.redirect('/products');
    },//sí funciona :D pero no file :(*

    //editar producto
    edit: function (req, res){
        const idProduct = +req.params.id;
        let productEdit = products.find(p => p.id === idProduct);
        res.render('./products/edit-products', {productEdit})
    },

    putEdit: function (req,res){
        const idEdit = +req.params.id;
        let file = req.image;
        if (!file) {
            return res.status(400).send('No se proporcionó ningún archivo');
        }
        const { name,  price, mark, style, gluten, packing, volume, origin, artisanal, alcohol, ingredients, description} = req.body;
        products.forEach((productsEdit) =>{
                if (productsEdit.id == idEdit){
                    productsEdit.name = name;
                    productsEdit.price = price;
                    productsEdit.mark = mark;
                    productsEdit.style = style;
                    productsEdit.gluten = gluten;
                    productsEdit.packing = packing;
                    productsEdit.volume = volume;
                    productsEdit.origin = origin;
                    productsEdit.artisanal = artisanal;
                    productsEdit.alcohol = alcohol;
                    productsEdit.ingredients = ingredients;
                    productsEdit.description = description;
                    productsEdit.image = `${file.filename}`;
                };
        });
        fs.writeFileSync('./src/data/products.json', JSON.stringify(products, null, 4), {encoding: 'utf-8'})
        res.redirect('/products');
    }
}//no funciona file


module.exports = productsController;
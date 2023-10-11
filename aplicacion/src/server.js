const express = require ('express');
//rutas
const router = require('./routes');
const homeRouter = require ('./routes/home');
const productsRouter = require('./routes/products');
const userRouter = require('./routes/user');
const methodOverride = require('method-override')

const app = express ();
const PORT = 8000;

app.use(express.static('public'));

app.set('view engine', 'ejs')
app.set ('views', './src/views');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));

//rutas 
app.use ('/',router);

app.use('/home',homeRouter);

app.use ('/products',productsRouter);

app.use('/user', userRouter)

app.listen (PORT, () => {
    console.log (`[server] corriendo en el puerto: ${PORT}`);
});
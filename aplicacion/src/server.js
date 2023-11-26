const express = require ('express');
const router = require('./routes');
const homeRouter = require ('./routes/home');
const productsRouter = require('./routes/products');
const userRouter = require('./routes/user');

const app = express ();
const PORT = 8000;

app.use(express.static('public'));

//Template engine
app.set('view engine', 'ejs');
app.set ('views', './src/views');

//Capturar información
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Método override
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

//Rutas 
app.use ('/',router);
app.use ('/home',homeRouter);
app.use ('/products',productsRouter);
app.use ('/user', userRouter)

//Error 404
app.use((req, res, next) => {
    res.status(404).render("not-found")
});

//Puerto
app.listen (PORT, () => {
    console.log (`[server] corriendo en el puerto: ${PORT}`);
});

/*FALTA IMLPEMENTAR
const session = require('express-session')
const userMiddleware = require('./middleware/userMiddleware')
const cookies = require('cookie-parser');
const cookieMiddleware = require('./middleware/cookieMiddleware')

app.use(session({
    secret: "Shh",
    resave: false,
    saveUninitialized: false,
}))
app.use(cookies());
app.use(cookieMiddleware);

//middleware global 
app.use(userMiddleware.logged)
*/
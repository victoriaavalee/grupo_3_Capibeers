const express = require ('express');
const router = require('./routes');
const session = require('express-session');
const cookieParser = require('cookie-parser');

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
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//Morgan
const morgan = require('morgan');
app.use(morgan('dev'));



/////////////////////////////////////DESDE AQUI no esta nada en el video
//Express-session
app.use(session({
    secret: "topSecret",
    resave: false,
    saveUninitialized: false,
}));

//Cookie Parser
app.use(cookieParser());

//Middlewares
const keepUserLogger = require('./middleware/keepUserLogger'); //se fija si el user esta logueado
const isUserLogged = require('./middleware/isUserLogged'); //este se usa para los iconos de entrada y slaida de user 
const keepUserCookie =  require('./middleware/keepUserCookie'); //cookie q reuerda user
app.use(keepUserLogger);
app.use(isUserLogged);
app.use(keepUserCookie);
///////////////////////////////////////////HASTA AQUI

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
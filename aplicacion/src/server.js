const express = require ('express');
const router = require('./routes');
//Session
const session = require('express-session');

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

//Middlewares
const userLoggedMiddleware = require('./middleware/userLoggedMiddleware');

//Session
app.use(session({
    secret: "topSecret",
    resave: false,
    saveUninitialized: false,
}));

//app middlewares
app.use(userLoggedMiddleware);




/////////////////////////////////////DESDE AQUI no esta nada en el video
//Cookie Parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const keepUserLogger = require('./middleware/keepUserLogger'); //se fija si el user esta logueado
const keepUserCookie =  require('./middleware/keepUserCookie'); //cookie q reuerda user
app.use(keepUserLogger);
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
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


//otra opción
/*const express = require('express');
const router = require('./routes');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

const homeRouter = require('./routes/home');
const productsRouter = require('./routes/products');
const userRouter = require('./routes/user');

const app = express();
const PORT = 8000;

// Middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: process.env.SESSION_SECRET || 'topSecret',
    resave: false,
    saveUninitialized: false,
}));
app.use(cookieParser());
app.use(morgan('dev'));

// Middlewares personalizados
const keepUserLogger = require('./middleware/keepUserLogger');
const isUserLogged = require('./middleware/isUserLogged');
const keepUserCookie =  require('./middleware/keepUserCookie');
app.use(keepUserLogger);
app.use(isUserLogged);
app.use(keepUserCookie);

// Rutas
app.use('/', router);
app.use('/home', homeRouter);
app.use('/products', productsRouter);
app.use('/user', userRouter);

// Manejo de Error 404
app.use((req, res, next) => {
    res.status(404).render('not-found');
});

// Puerto
app.listen(PORT, () => {
    console.log(`[server] corriendo en el puerto: ${PORT}`);
});
*/
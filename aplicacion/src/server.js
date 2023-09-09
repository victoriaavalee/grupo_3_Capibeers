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

/*Codigo pasado
const path= require ('path');

const publicFolderPath=path.resolve(__dirname, './public');
app.use(express.static(publicFolderPath));

app.get ('/', (req, res)=>{ //home /inicio
    res.sendFile(path.resolve (__dirname, './views/home.html'))
});

app.get ('/login', (req, res)=>{ //login/acceder
    res.sendFile(path.resolve (__dirname, './views/login.html'))
});

app.get ('/registro', (req, res)=>{//registrarse
    res.sendFile(path.join (__dirname, './views/registro.html'))
});

app.get ('/productos', (req, res)=>{
    res.sendFile(path.join (__dirname, './views/productos.html'))
});

app.get ('/carrito', (req, res)=>{//carrito
    res.sendFile(path.join (__dirname, './views/carrito.html'))
});

app.get ('/restablecer-clave', (req, res)=>{//indumentaria
    res.sendFile(path.join (__dirname, './views/restablecer-clave.html'))
});
app.get ('/sobreNosotros', (req, res)=>{//sobre nosotros
    res.sendFile(path.join (__dirname, './views/sobreNosotros.html'))
});
app.get ('/variedades', (req, res)=>{//variedades
    res.sendFile(path.join (__dirname, './views/variedades.html'))
});
app.get ('/accesorios', (req, res)=>{//accesorios
    res.sendFile(path.join (__dirname, './views/accesorios.html'))
});
app.get ('/indumentaria', (req, res)=>{//indumentaria
    res.sendFile(path.join (__dirname, './views/indumentaria.html'))
});
*/


const express = require ('express');
const router = require('./routes');
const productsRouter = require('./routes/products');
const homeRouter = require ('./routes/home');
const userRouter = require('./routes/user');

const app = express ();
const PORT = 8000;

app.use(express.static('public'));

app.use ('/',router);

app.use('/home',homeRouter);

app.use ('/products',productsRouter);

app.use('/user', userRouter)

app.listen (PORT, () => {
    console.log (`[server] corriendo en el puerto: ${PORT}`);
});


/*
let rutasProductos = require ('./routes/productos.js');
let rutasMain = require ('./routes/home.js');


app.use('/productos', rutasProductos);

/*
//creo que todo esto se va :(
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


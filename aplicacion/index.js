const express = require ('express');
const path= require ('path');
const app = express ();
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

app.get ('/producto', (req, res)=>{
    res.sendFile(path.join (__dirname, './views/producto.html'))
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


app.listen (8080, () =>{
    console.log ('Servidor corriendo en el puerto 8080');
});

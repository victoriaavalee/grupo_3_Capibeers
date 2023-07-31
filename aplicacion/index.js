const express = require ('express');
const path= require ('path');
const app = express ();
app.use(express.static('public'))

app.get ('/', (req, res)=>{ //home
    res.sendFile(path.join (__dirname, './views/home.html'))
});

app.get ('/login', (req, res)=>{
    res.sendFile(path.join (__dirname, './views/login.html'))
});

app.get ('/registro', (req, res)=>{
    res.sendFile(path.join (__dirname, './views/registro.html'))
});

app.get ('/producto', (req, res)=>{
    res.sendFile(path.join (__dirname, './views/producto.html'))
});

app.get ('/carrito', (req, res)=>{
    res.sendFile(path.join (__dirname, './views/carrito.html'))
});



app.listen (8080, () =>{
    console.log ('Servidor corriendo en el puerto 8080');
});
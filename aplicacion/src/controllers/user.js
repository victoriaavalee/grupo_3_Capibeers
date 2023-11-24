const path = require('path');
const fs = require('fs');

//const usersListJSON = require ('./src/data/users.json');
//const { json } = require('express');

//Controladores
const userController = {  //REVEEER segun el email en la url que permita ver una vista de perfil con los items
    profile: function (req, res){
        const archivoUsuario = fs.readFileSync('./src/data/users.json', {encoding: 'utf-8'});
        usuarios = JSON.parse(archivoUsuario);
        res.render('./user/profile', {'usersList':usuarios});
    },
    login: function (req, res){
        res.render('./user/login');
    },
    register: function (req, res){  //es como un create
        res.render('./user/register');
    },
    registerPost: function (req, res) {  //es como un create x2
        const usuario = {
            email: req.body.email,
            name: req.body.nombre,
            lastName: req.body.apellido,
            birthdate:req.body.edad,
            category: req.body.profile,
            image:req.body.fotoUsuario,
            password: req.body.contraseña,
            confPassword: req.body.confContraseña
        }
        //guardar info de usuario en un json
        const archivoUsuario = fs.readFileSync ('./src/data/users.json', {encoding: 'utf-8'});
        let usuarios;
        if(archivoUsuario == ""){
            usuarios = [];
        }else{
            usuarios = JSON.parse(archivoUsuario);
        }
        usuarios.push(usuario);
        usuariosJSON = JSON.stringify(usuarios);
        fs.writeFileSync('./src/data/users.json', usuariosJSON);
        res.redirect('/user/list');
    },
    restorePassword: function (req, res){
        res.render('./user/restorePassword');
    },
    list: function(req,res){
        const archivoUsuario = fs.readFileSync('./src/data/users.json', {encoding: 'utf-8'});
        usuarios = JSON.parse(archivoUsuario);
        res.render('./user/userList', {'usersList':usuarios});
    },
    edit: function (req, res){
        const archivoUsuario = fs.readFileSync('./src/data/users.json', {encoding: 'utf-8'});
        usuarios = JSON.parse(archivoUsuario);
        res.render('./user/profileEdit', {'usersList':usuarios});
    },
    search: function(req,res){
        const loQueSeBusca = req.query.search;
        const archivoJSON = fs.readFileSync('./src/data/users.json', {encoding: 'utf-8'});
        const usuarios = JSON.parse(archivoJSON);
        const userResults = [];
        for(let i = 0; i<usuarios.length; i++){
            if (usuarios[i].email.includes(loQueSeBusca)){
                usersResults.push(usuarios[i]);
            }
        }
        res.render('userResults', {usersResults: userResults})
    },
}


module.exports = userController;
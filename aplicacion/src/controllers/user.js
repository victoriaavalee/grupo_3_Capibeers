const usersList = require ('../data/user.json');
const path = require('path');
const fs = require('fs');

//Controladores
const userController = {
    profile: function (req, res){
        res.render('./user/profile');
    },
    login: function (req, res){
        res.render('./user/login');
    },
    register: function (req, res){
        res.render('./user/register');
    },
    registerPost: function (req, res) {
        //opcion 1 Confirma envio y redirige a home
        //res.send("hola, funciona")
        //console.log(req.body)
        //res.redirect('/home')
        //opcion 2 Crea un array y muestra un json en consola
        let usuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            edad:req.body.edad
        }
        res.send(usuario)     
    },
    restorePassword: function (req, res){
        res.render('./user/restorePassword');
    },
    list: function(req,res){
        res.render('./user/userList', {usersList})
    },
    edit: function (req, res){
        let idUser = req.params.idUser;
        let usersListTemporary = [
            {id:0,name:"anahi"},
            {id:1,name:"benajmin"},
            {id:2,name:"camilo"},
            {id:3,name:"damien"},
            {id:4,name:"estefania"},
        ];
        let userToEdit = usersListTemporary [idUser];
        res.render('./user/profileEdit', {userToEdit: userToEdit});
    }
}

module.exports = userController;
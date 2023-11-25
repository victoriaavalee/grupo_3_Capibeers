const path = require('path');
const fs = require('fs');
const usersJSON = require ('../data/users.json');

//Controladores
const userController = {  
    profile: function (req, res){
        const userId = +req.params.id;
        const user = usersJSON.find((u)=>u.id === userId); 
        res.render ('./user/profile',{'user' : user,});
    }, 
    login: function (req, res){
        res.render('./user/login');
    },
    register: function (req, res){
        res.render('./user/register');
    },
    registerPost: function (req, res) {
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
        const archivoUsuarios = fs.readFileSync ('./src/data/users.json', {encoding: 'utf-8'});
        let usuarios;
        if(archivoUsuarios == ""){
            usuarios = [];
        }else{
            usuarios = JSON.parse(archivoUsuarios);
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
        const userId = +req.params.id;
        const user = usersJSON.find((u)=>u.id === userId); 
        res.render('./user/profileEdit', {'user':user});
    }, 
    search: function(req,res){ //REVEER
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
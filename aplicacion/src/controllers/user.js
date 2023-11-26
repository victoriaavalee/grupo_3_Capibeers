const path = require('path');
const fs = require('fs');
const usersJSON = require ('../data/users.json');
//const { log } = require('console'); solo para verificar que la info llegue

//Controladores
const userController = {  
    profile: function (req, res){
        const userId = +req.params.id;
        const user = usersJSON.find((u)=>u.id === userId); 
        res.render ('./user/profile',{'user' : user,});
    },
    profileDelete: function (req, res){
        const userId = +req.params.id;
        const usersTmp = usersJSON.filter((u)=>u.id !== userId);
        fs.writeFileSync('./src/data/users.json', JSON.stringify(usersTmp));
        res.redirect('/user/list')
        /*En mi caso funciona bien, si no, se pone el usersJSON con let y se reemplaza el usersTmp por usersJSON
         para actualizar la variable (let). No olvidar cambiar el usersTmp del JSON.stringify */
    },
    login: function (req, res){
        res.render('./user/login');
    },
    register: function (req, res){
        res.render('./user/register');
    },
    registerPost: function (req, res) {
        const usuario = req.body;
        usuario.id = new Date().getTime(); //pone un id diferente a cada user ingresado
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
        /*const test = req.body; Testea si la info llega a consola y viaja bien
        console.log(test);*/
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
const path = require('path');
const fs = require('fs');
const usersJSON = require ('../data/users.json');
const { log } = require('console'); //solo para verificar que la info llegue

//Controladores
const userController = {  
    profile: function (req, res){
        const userId = +req.params.id;
        const user = usersJSON.find((u)=>u.id === userId); 
        res.render ('./user/profile',{'user' : user,});
    },
    profileDelete: function (req, res){
        const userId = +req.params.id;
        const imageDelete = usersJSON.find((u)=>u.id ==userId);
        const imageD = path.join (__dirname, '../../public/img/users/' + imageDelete.image);
        if(fs.existsSync(imageD)){
            fs.unlinkSync(imageD)
        };
        const usersTmp = usersJSON.filter((u)=>u.id !== userId);
        fs.writeFileSync('./src/data/users.json', JSON.stringify(usersTmp));
        res.redirect('/user/list');
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
        const newId = usersJSON[(usersJSON.length - 1 )].id + 1;
        let file = req.file;
        let usuario = {
            id: newId,
            email: req.body.email,
            name: req.body.name,
            lastName: req.body.lastName,
            birthdate:req.body.birthdate,
            category: req.body.category,
            password: req.body.password,
            confPassword: req.body.confPassword,
            image:`${file.filename}`,
        }
        usersJSON.push(usuario);
        fs.writeFileSync(
            path.join(__dirname, "../data/users.json"),
            JSON.stringify(usersJSON, null, 2),
            {
                encoding: 'utf-8',
            }
        );
        res.redirect('/user/list')
        //res.redirect('/user/list');
        //VERSION ORIGINAL + CLASE
        /*
        const archivoUsuarios = fs.readFileSync ('./src/data/users.json', {encoding: 'utf-8'});
        let newId = usersJSON[(usersJSON.length - 1 )].id + 1; 
        let file = req.file;
        let usuario = {
            id: newId,
            email: req.body.email,
            name: req.body.name,
            lastName: req.body.lastName,
            birthdate:req.body.birthdate,
            category: req.body.category,
            password: req.body.password,
            confPassword: req.body.confPassword,
            image:`img/${file.filename}`
        }
        //const usuario = req.body;
        //usuario.id = new Date().getTime(); //pone un id diferente a cada user ingresado
        let usuarios;
        if(archivoUsuarios == ""){
            usuarios = [];
        }else{
            usuarios = JSON.parse(archivoUsuarios);
        }
        usuarios.push(usuario);
        usuariosJSON = JSON.stringify(usuarios, null, 2);
        fs.writeFileSync('./src/data/users.json', usuariosJSON);
        res.redirect('/user/userList');
        res.render('./user/register');
        */
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
const path = require('path');
const fs = require('fs');
const usersJSON = require ('../data/users.json');
const {validationResult} = require('express-validator');
const User = require('../models/UserMod');
const bcryptjs = require('bcryptjs');

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
        if (req.session.isUserLogger){
            return res.redirect('/products');
        }
        return res.render('./user/login');
    },
    loginPost: function (req, res){
        const userToLogin = User.findByField('email', req.body.email);
        if(userToLogin){
            const isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(isOkThePassword){
                return res.send('Ok puedes seguir')
            }
            return res.render('./user/login',{
                errors: {
                    email:{
                        msg:'Las credenciales son inválidas.'
                    }
                },
            });
        }
        return res.render('./user/login',{
            errors: {
                email:{
                    msg:'No se encuentra este correo electrónico registrado en nuestra base de datos.'
                }
            },
        });
    },
    logoutPost: function(req, res){
        req.session.destroy();
        return res.redirect('/home');
    },
    register: function (req, res){
        res.render('./user/register');
    },
    registerPost: function (req, res) {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length == 0 ) {
            const userInDb = User.findByField('email', req.body.email);
            if (userInDb){
                return res.render('./user/register', {
                    errors:{
                        email:{
                            msg:'Este correo electrónico ya está registrado.'
                        }
                    },
                    old: req.body,
                });
            }
            const userToCreate = {
                ...req.body,
                image: req.file.filename,
                password: bcryptjs.hashSync(req.body.password, 10),
            }
            const userCreated = User.create(userToCreate);
            return res.redirect('./login');
        }else{
            return res.render('./user/register', {
                errors: resultValidation.mapped(),
                old: req.body,
            });
        }
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
    editPut: function (req, res){
        const id = req.params.id;
        let file = req.file;
        const {email, name, lastName} = req.body;
        usersJSON.forEach((userEdit) =>{
                if (userEdit.id == id){
                    userEdit.email = email;
                    userEdit.name = name;
                    userEdit.lastName = lastName;
                    userEdit.image = `${file.filename}`
                };
        });;
        fs.writeFileSync(
            path.join(__dirname, "../data/users.json"),
            JSON.stringify(usersJSON, null, 2),
            {
                encoding: 'utf-8',
            }
        );
        res.render('./user/userList',  {'usersList':usersJSON});
    },
    search: function (req,res){ //REVISAR   
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
    }
};

module.exports = userController;
const express = require ('express');
const userController = require('../controllers/user')
const userRouter = express.Router();

//Rutas
userRouter.get('/', userController.profile);
userRouter.get('/login', userController.login);
userRouter.get('/register', userController.register);//vista que pide datos GET
userRouter.post('/register', userController.registerPost); //Guardar usuario/almacena/valida POST
userRouter.get('/restorePassword', userController.restorePassword);
userRouter.get('/list', userController.list); //listado de users registrados
//userRouter.get('/search', userController.search); //busqueda de users
userRouter.get('/edit/:idUser', userController.edit);
userRouter.put('/edit', function (req,res){
    res.send ("Fui por PUT! :)");
});
userRouter.delete('/delete/:idUser', function (req,res){
    res.send ("Fui por DELETE! >:)");
})



module.exports = userRouter;
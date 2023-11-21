const express = require ('express');
const userController = require('../controllers/user')
const userRouter = express.Router();

//Rutas
userRouter.get('/', userController.profile);
userRouter.get('/login', userController.login);
userRouter.get('/register', userController.register);
userRouter.post('/register', userController.registerPost);
userRouter.get('/restorePassword', userController.restorePassword);
userRouter.get('/list', userController.list);
userRouter.get('/search', userController.search); //falta
userRouter.get('/edit/:idUser', userController.edit);
userRouter.put('/edit', function (req,res){
    res.send ("Fui por PUT! :)");
});
userRouter.delete('/delete/:idUser', function (req,res){ //falta
    res.send ("Fui por DELETE! >:)");
})


module.exports = userRouter;
const express = require ('express');
const userController = require('../controllers/user')
const userRouter = express.Router();
const uploadFile = require('../middleware/usersMulter');

//Rutas
userRouter.get('/profile/:id', userController.profile);
userRouter.get('/login', userController.login);
userRouter.get('/register', userController.register);
userRouter.post('/register', uploadFile.single("profilePhoto"), userController.registerPost);
userRouter.get('/restorePassword', userController.restorePassword);
userRouter.get('/list', userController.list);
userRouter.get('/search', userController.search); //falta
userRouter.get('/edit/:id', userController.edit); //hacer lo mismo que con profile
//userRouter.put('/edit/', uploadFile.single("profilePhoto"), function (req,res){ //borrar la function / userController.putEdit para editar el perfil incluida la foto de perfil
    //res.send ("Fui por PUT! :)"); //esto se guia en base al multer y la validacion de archivos
//});
userRouter.delete('/delete/:idUser', function (req,res){ //falta
    res.send ("Fui por DELETE! >:)");
})


module.exports = userRouter;
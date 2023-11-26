const express = require ('express');
const userController = require('../controllers/user')
const userRouter = express.Router();
const uploadFile = require('../middleware/usersMulter');

//Rutas
userRouter.get('/profile/:id', userController.profile);
userRouter.post('/profile/:id', userController.profileDelete);
userRouter.get('/login', userController.login); //falta que envie info a algun lugar y la valide
userRouter.get('/register', userController.register);
userRouter.post('/register', uploadFile.single("profilePhoto"), userController.registerPost); //falta revisar multer
userRouter.get('/restorePassword', userController.restorePassword);
userRouter.get('/list', userController.list);
userRouter.get('/search', userController.search); //Actualizacion: falta
userRouter.get('/edit/:id', userController.edit);
//userRouter.post('/edit/:id', userController.editPost);
//userRouter.put('/edit/', uploadFile.single("profilePhoto"), function (req,res){ //borrar la function / userController.putEdit para editar el perfil incluida la foto de perfil
    //res.send ("Fui por PUT! :)"); //esto se guia en base al multer y la validacion de archivos
//}); creo que esto no hace nada                                                         


module.exports = userRouter;
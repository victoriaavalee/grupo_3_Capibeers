function categoryMiddleware (req,res,next) {
    if(req.session.userLogged){
        res.send("estas logueado pero nose sisos admin ")
        let findAll = require('../data/users.json');
        let allUsers= this.findAll();
        if( allUsers.find(oneUser => oneUser.category =="Administrador")){
            res.send("estas logueado como admin")
        }
    }else{
        return res.redirect('../user/login');
    }
    next()
}

module.exports = categoryMiddleware;
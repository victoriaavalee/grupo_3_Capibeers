const User = require('../models/UserMod');

function userLoggedMiddleware (req, res, next){
    res.locals.isLogged = false; 
    
    const emailInCookie = req.cookies.userEmail;
    const userFromCookie = User.findByField('email', emailInCookie);
    
    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }

    if(req.session.userLogged){
        res.locals.userLogged = req.session.userLogged; 
        res.locals.isLogged = true; 
        //req.session.isLogged = true;
    }
    next();
};

module.exports = userLoggedMiddleware;
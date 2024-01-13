function userLoggedMiddleware (req, res, next){
    res.locals.isLogged = false;
    if(req.session.userLogged){
        res.locals.isLogged = true;
    }else{
        res.locals.userLogged = req.session.userLogged;
    }
    next();
};

module.exports = userLoggedMiddleware;
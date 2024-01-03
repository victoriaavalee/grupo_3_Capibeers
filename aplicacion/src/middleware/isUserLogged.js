function isUserLogged (req, res, next){
    if(req.session.isUserLogger == undefined){
        res.locals.isUserLogger = false;
    }else{
        res.locals.isUserLogger = true;
    }
    next();
};

module.exports = isUserLogged;
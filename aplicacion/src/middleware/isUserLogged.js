function isUserLogged (req, res, next){
    if(req.session.isUserLogger == undefined){
        res.locals.isUserLogger = false;
    }else{
        res.locals.isUserLogger = true;
    }
    next();
};

module.exports = isUserLogged;

/*
function isUserLogged (req, res, next){
    if(req.session.userLogger == undefined){
        res.locals.userLogger = false;
    }else{
        res.locals.userLogger = true;
    }
    next();
};
module.exports = isUserLogged;
*/
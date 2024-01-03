//hasta el momento sin uso
function authMiddleware (req, res, next){
    if(req.session.userLogger != undefined){
        next();
    }else{
        return res.redirect("./products")
    }
}

module.exports = authMiddleware;
//hasta el momento sin uso
function rememberMiddleware (req,res,next){
    next()
    if(req.cookies.remember != undefined && req.session){

    }
}

module.exports = rememberMiddleware;
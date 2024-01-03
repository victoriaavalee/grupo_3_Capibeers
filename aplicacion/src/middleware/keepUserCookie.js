function keepUserCookie (req,res,next){
    next()
    if(req.cookies.keepUser != undefined && req.session.userLogger == undefined){
        const usersJson = fs.readFileSync ('./src/data/users.json', {encoding: 'utf-8'});
        let users;
        if(usersJson == ""){
            users = [];
        }else{
            users = JSON.parse(usersJson);
        }
        let userToLogin;
        for(let i = 0; i < users.length; i++){
            if(users[i].email == req.cookie.keepUser){
                userToLogin = users[i];
                break;
            }
        }
        req.session.userLogger = userToLogin;
    }
}

module.exports = keepUserCookie;
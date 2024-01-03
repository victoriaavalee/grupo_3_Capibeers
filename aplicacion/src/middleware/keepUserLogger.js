//hasta el momento sin uso
function keepUserLogger (req, res, next){
    if(req.cookies.userEmail != undefined){
        console.log('La cookie existe')
        const email = req.cookies.userEmail;
        const user = getUserByEmail(email); ////

        req.session.isUserLogged = true;
        req.session.emailUser = user.email;
        console.log('Sesion seteada')
    }
    next();
};

module.exports = keepUserLogger;

/*
const fs = require('fs');
const path = require('path');
const db = require('../database/models');

function keepUserLogger(req, res, next) {
    next();

    if (req.cookies.userLogged != undefined) {
        db.User.findOne({
            where: {
                email: req.cookies.userLogged
            }
        })
        .then(user => {
            if(user) {
                req.session.userLogged = user.email;
            }
        })
        .catch(error => console.log(error))
    }
}

module.exports = keepUserLogger;
*/
const indexController =  (req, res) => {
    res.render('index'); //esto usar al archivo index.ejs
};

module.exports = indexController;
/*
const  controller ={
    index: (req,res) => {
        return res.render('index');
    },
    register: (req,res) => {
        return res.render('head');
    },
    login: (req,res) => {
        return res.render('login');
    }
}
module.exports = controller;
*/
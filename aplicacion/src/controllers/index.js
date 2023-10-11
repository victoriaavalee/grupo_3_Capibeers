const indexController = (req, res) =>{
    res.render('index');
};

module.exports = {
    indexController,
};

/*
function  controller ={
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

const path = require('path');

const homeController = (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../views/home.html'));
}

module.exports = homeController;


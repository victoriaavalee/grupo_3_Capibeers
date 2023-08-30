const path = require ('path');

const indexController =  (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/index.html'));
}

module.exports = indexController;
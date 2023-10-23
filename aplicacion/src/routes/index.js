const express = require ('express');
const indexController =  require ('../controllers/index');
const homeController = require('../controllers/home');

const router = express.Router();

router.get('/', indexController);
router.get('/home', homeController);

module.exports = router;

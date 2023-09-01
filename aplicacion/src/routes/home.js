const express = require ('express');
const homeController = require ('../controllers/home');

const homeRouter = express.Router();

homeRouter.get('/', homeController);
//nose si necesita todas estas vistas el home ._.
//homeRouter.get('/vistaA', startHomeController);
//homeRouter.get('/vistaB', startHomeController);
//homeRouter.get('/vistaC', startHomeController);

module.exports = homeRouter;

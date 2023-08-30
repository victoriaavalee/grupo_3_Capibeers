const express = require ('express');
let indexController = require ('../controllers');
const startHomeController = require ('../controllers/home');

const homeRouter = express.Router();

homeRouter.get('/', startHomeController);
//nose si necesita todas estas vistas el home 
homeRouter.get('/vistaA', startHomeController);
homeRouter.get('/vistaB', startHomeController);
homeRouter.get('/vistaC', startHomeController);

module.exports = homeRouter;

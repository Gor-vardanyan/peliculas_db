const route = require('express').Router();
const OrderController = require('../controllers/OrderController');

//Endpoint con get para conectar express mediante el ruter y su controllador
route.get('/', OrderController.getAll);

module.exports = route;
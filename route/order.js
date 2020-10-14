const route = require('express').Router();
const OrderController = require('../controllers/OrderController');
const auth = require('../middleware/auth');

//Endpoint con get para conectar express mediante el ruter y su controllador
route.get('/', OrderController.getAll);
route.post('/',auth, OrderController.create);

module.exports = route;
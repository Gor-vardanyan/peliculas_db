const route = require('express').Router();
const UserController = require('../controllers/UserController');

//Endpoint con get para conectar express mediante el ruter y su controllador
route.get('/',UserController.getAll);

module.exports = route;
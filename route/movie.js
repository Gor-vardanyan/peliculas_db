const route = require('express').Router();
const MovieController = require('../controllers/MovieController');

//Endpoint con get para conectar express mediante el ruter y su controllador
route.get('/', MovieController.getAll);

module.exports = route;
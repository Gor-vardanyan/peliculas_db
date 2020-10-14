const route = require('express').Router();
const MovieController = require('../controllers/MovieController');

//Endpoint con get para conectar express mediante el ruter y su controllador
route.get('/', MovieController.getAll);
route.get('/:id', MovieController.getByPk);
route.get('/title/:title', MovieController.getByTitle);
//route para post (crear pelicula)

module.exports = route;
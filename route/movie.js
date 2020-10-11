const route = require('express').Router();
const MovieController = require('../controllers/MovieController');

//endpoint de get para recoger todo lo de moviecontroller
route.get('/', MovieController.getAll);

module.exports = route;
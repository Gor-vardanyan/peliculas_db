const route = require('express').Router();
const UserController = require('../controllers/UserController');

//Endpoint con get para conectar express mediante el ruter y su controllador
route.post('/signup',UserController.signup);
route.post('/login', UserController.login);
route.delete('/', UserController)
route.get('/profile',)

module.exports = route;
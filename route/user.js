const route = require('express').Router();
const UserController = require('../controllers/UserController');
const auth = require('../middleware/auth');

//Endpoint con get para conectar express mediante el ruter y su controllador
route.post('/signup', UserController.signup);
route.post('/login', UserController.login);
route.get('/delete', UserController.delete)
route.get('/profile', auth, UserController.profile)

module.exports = route;
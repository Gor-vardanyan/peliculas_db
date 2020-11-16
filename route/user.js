const route = require('express').Router();
const UserController = require('../controllers/UserController');
const auth = require('../middleware/auth');

//Endpoint con get para conectar express mediante el ruter y su controllador
route.post('/signup', UserController.signup);
route.post('/login', UserController.login);
route.post('/rent/:id', auth, UserController.rent);
route.post('/downRent/:id', auth, UserController.downRent);
route.get('/delete', UserController.delete)
route.get('/profile', auth, UserController.profile)
route.get('/users', UserController.findusers);

module.exports = route;
const user = require('../models/user');

const UserController = {
    getAll(req,res) {
        res.send('hola');
    }
}

module.exports = UserController;
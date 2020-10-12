const {User} = require('../models/');
const UserController = {
    //user necesita ser creado, ser leido,  ser borrado, y ser editado
    async signup(req,res){
        try {
            const user = await User.create(req.body);
            res.status(201).send(user)
        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'There was a problem trying to register the user'
            })
        }
    },
    async login(req, res){
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            res.send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to login' })    
        }
    }
}

module.exports = UserController;
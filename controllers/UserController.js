const {User} = require('../models/');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserController = {
    //user necesita ser creado, ser leido,  ser borrado, y ser editado
    async signup(req,res){
        try {
            req.body.password = await bcrypt.hash(req.body.password, 9);
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
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (!isMatch) {
            return res.status(400).send({
                message: 'Wrong credentials'
            })
        }

        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            })

            const token = jwt.sign({ id: user.id }, 'test_auth_password', { expiresIn: '30d' });
            user.token = token; //añade el token a la instancia user
            await user.save() // valida & actualiza en la base de datos la instancia de user
            res.send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to login' })    
        }
    },
    async profile(req,res){
        try {
            const user = req.user;
            res.send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'You are not loged in' })    
        }
    },
    async delete(req,res){
        try {        
            const user = await User.findOne({
                where: {
                  email: req.body.email
                }
            })
            await user.destroy();
            res.status(201).send({message: 'User deleted'})

        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Something went wrong' })    
        }
    }
}

module.exports = UserController;
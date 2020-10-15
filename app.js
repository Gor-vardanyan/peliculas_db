const express = require('express');
const auth = require('./middleware/auth');
const movieRouter = require('./route/movie');
const userRouter = require('./route/user');
const orderRouter = require('./route/order');
const config = require('config/config.json')[env];
const app = express();
const PORT = 3000;

app.use(express.json());
app.get('/', auth, (req, res) => res.send(req.user))
app.use('/user', userRouter);
app.use('/movie', movieRouter);
app.use('/order', orderRouter);

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config); 
} else {
     sequelize = new Sequelize(config.database, config.username, config. password, config); 
    }

app.listen(PORT, console.log("Server runing on port " + PORT));
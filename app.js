const express = require('express');
require('dotenv').config()
const auth = require('./middleware/auth');
const movieRouter = require('./route/movie');
const userRouter = require('./route/user');
const orderRouter = require('./route/order');
//const config = require('config/config.json')[env];

const app = express();
//CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT,OPTIONS, DELETE");
  next();
});
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.get('/', auth, (req, res) => res.send(req.user))
app.use('/user', userRouter);
app.use('/movie', movieRouter);
app.use('/order', orderRouter);

/*if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config); 
} else {
     sequelize = new Sequelize(config.database, config.username, config. password, config); 
  }
*/
app.listen(PORT, console.log("Server runing on port " + PORT));
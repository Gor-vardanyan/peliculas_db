const express = require('express');
const auth = require('./middleware/auth');
const movieRouter = require('./route/movie');
const userRouter = require('./route/user');
const orderRouter = require('./route/order');

const app = express();
const PORT = 3000;

app.use(express.json());
app.get('/', auth, (req, res) => res.send(req.user))
app.use('/user', userRouter);
app.use('/movie', movieRouter);
app.use('/order', orderRouter);


app.listen(PORT, console.log("Server runing on port " + PORT));
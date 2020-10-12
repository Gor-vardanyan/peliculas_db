const express = require('express');
const movieRouter = require('./route/movie');
const userRouter = require('./route/user');
const orderRouter = require('./route/order');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/user', userRouter);
app.use('/movie', movieRouter);
app.use('/order', orderRouter);


app.listen(PORT, console.log("Server runing on port " + PORT));
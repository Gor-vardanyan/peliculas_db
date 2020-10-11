const express = require('express');
const movieRouter = require('./route/movie');
const userRouter = require('./route/user');
const orderRouter = require('./route/order');

const app =express();
const PORT = 3000;

app.use(express.json());

app.get('/', movieRouter);
app.get('/', userRouter);
app.get('/', orderRouter);


app.listen(PORT, console.log("Server runing on port " + PORT));
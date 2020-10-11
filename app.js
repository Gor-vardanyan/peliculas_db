const express = require('express');
const movieRouter = require('./route/movie');
const app =express();
const PORT = 3000;

app.use(express.json());

app.get('/', movieRouter);

app.listen(PORT, console.log("Server runing on port " + PORT));
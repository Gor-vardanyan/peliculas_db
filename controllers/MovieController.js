//requerimos desde la ubicación del archivo
const movie = require('../models/movie');

const MovieController = {
    
    getAll(req, res) {
       res.send("hola");
    }
}
module.exports = MovieController;
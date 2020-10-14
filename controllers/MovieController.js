//requerimos desde la ubicación del archivo
const { Movie } = require('../models/');

const MovieController = {
   async getAll(req, res) {
        try {
            const movies = await Movie.findAll();
            res.send(movies);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to get the movies' })
        }
    },
    async getByPk(req, res) {
        try {
            const movie = await Movie.findOne({where: {
                id: req.params.id
              }});
            res.send(movie);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to get the movies' })
        }
    },
    async getByTitle(req, res) {
        try {
            const movie = await Movie.findOne({where: {
                title: req.params.title
              }});
            res.send(movie);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'There was a problem trying to get the movies' })
        }
    }
}
module.exports = MovieController;
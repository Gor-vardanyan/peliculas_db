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
    async getPagination(req, res) {
        try {
            let pagina = (parseInt(req.params.pagina));
            let offset = ((pagina?pagina:0)*10);
            const movies = await Movie.findAll({offset, limit: 10});
            res.send(movies);
        } catch (error) {
            res.status(500).send({error})
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
            const movie = await Movie.findall({where: {
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
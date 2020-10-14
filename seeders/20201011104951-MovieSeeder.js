'use strict';

const axios = require('axios');

const addMovies = async(movies,page) => {
  const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&append_to_response=credits&language=es-ES&page=' + page);
  const now = new Date();
  const moviesChunk =  res.data.results.map(movie => ({
      //id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      overview: movie.overview,
      createdAt: now,
      updatedAt: now
  }));

  movies.push(...moviesChunk)
  return res.data.total_pages
}


module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const movies = [];
      const total_pages = await addMovies(movies, 1)
      for (let i = 1; i < 10; i++) {
        await addMovies(movies, i);
        console.log(i)
    }
      await queryInterface.bulkInsert('Movies', movies, {})
    } 
      catch (error) {
        console.log(error)
//        console.error(error.message)
    }  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Movies', null, {});
  }
};

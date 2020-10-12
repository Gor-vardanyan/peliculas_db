'use strict';
const addMovies = (page) => {
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&append_to_response=credits&language=es-ES&page=' + page)
    .then(res=> res.json())
    .then(res => movies.push(res))
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const movies = [];
      for (let i = 0; i <= 100; ++i){
        return addMovies(i);
      };
      await queryInterface.bulkInsert('Movies', movies, {})
    } 
      catch (error) {
        console.error(error.message)
    }  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Movies', null, {});
  }
};

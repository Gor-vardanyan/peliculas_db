'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Order, { through: models.MovieOrder });
    }
  };
  Movie.init({
    title:{ 
      type: DataTypes.STRING,
      allowNull:false  
    },
    poster_path:{
      type: DataTypes.STRING,
      allowNull:false  
    },
    overview: DataTypes.TEXT,
    release_date: DataTypes.STRING,
    vote_average: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};
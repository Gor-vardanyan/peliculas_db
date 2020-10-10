'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MovieOrder.init({
    MovieId: { 
      type: DataTypes.STRING, 
      allowNull:false  
    },
    OrderId: { 
      type: DataTypes.STRING, 
      allowNull:false  
    }
  },{
    sequelize,
    modelName: 'MovieOrder',
  });
  return MovieOrder;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User)
      this.hasMany(models.Movie, {through: models.MovieOrder})
    }
  };
  Order.init({
    UserId: {
    type: DataTypes.STRING, 
    allowNull:false  
  },
    status: {
    type: DataTypes.STRING, 
    allowNull:false  
  },
    returnDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
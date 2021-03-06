'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        token: Sequelize.STRING,
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        role:{
          type: Sequelize.INTEGER,
          defaultValue: 0
        },
        rented:{
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};

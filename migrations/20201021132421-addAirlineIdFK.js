'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Flights', {
      fields: ['AirlineId'],
      type: 'foreign key',
      references: {
        table: 'Airlines',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Flights', 'Flights_AirlineId_Airlines_fk')
  }
};

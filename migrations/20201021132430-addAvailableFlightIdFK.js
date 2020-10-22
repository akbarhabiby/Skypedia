'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Flights', {
      fields: ['AvailableFlightId'],
      type: 'foreign key',
      references: {
        table: 'AvailableFlights',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Flights', 'Flights_AvailableFlightId_AvailableFlights_fk')
  }
};

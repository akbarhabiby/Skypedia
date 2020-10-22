'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('AvailableFlights', {
      fields: ['FromIATA'],
      type: 'foreign key',
      references: {
        table: 'Airports',
        field: 'airportCode'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('AvailableFlights', 'AvailableFlights_FromIATA_Airports_fk')
  }
};

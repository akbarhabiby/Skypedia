'use strict';

const data = require('../json/flights.json')

data.forEach( flight => {
  flight.createdAt = new Date()
  flight.updatedAt = new Date()
})

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Flights', data, {})
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Flights', null, {})
  }
};

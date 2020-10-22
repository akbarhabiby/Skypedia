'use strict';

const data = require('../json/availableFlights.json')

data.forEach( avail => {
  avail.createdAt = new Date()
  avail.updatedAt = new Date()
})

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AvailableFlights', data, {})
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AvailableFlights', null, {})
  }
};

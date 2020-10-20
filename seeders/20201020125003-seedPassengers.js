'use strict';

const data = require('../json/passengers.json')

data.forEach( passenger => {
  passenger.createdAt = new Date()
  passenger.updatedAt = new Date()
})

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Passengers', data, {})
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Passengers', null, {})
  }
};

'use strict';

const data = require('../json/airports.json')

data.forEach( airport => {
  airport.createdAt = new Date()
  airport.updatedAt = new Date()
})

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Airports', data, {})
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Airports', null, {})
  }
};

'use strict';

const data = require('../json/airlines.json')

data.forEach( airline => {
  airline.createdAt = new Date()
  airline.updatedAt = new Date()
})

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Airlines', data, {})
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Airlines', null, {})
  }
};

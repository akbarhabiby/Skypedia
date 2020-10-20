'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    static associate(models) {
      Flight.belongsTo(models.Airline)
      Flight.belongsToMany(models.Passenger, { through: models.PassengerFlight })
    }
  };
  Flight.init({
    flightNumber: DataTypes.STRING,
    AirlineId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};
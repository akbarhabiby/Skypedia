'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PassengerFlight extends Model {
    static associate(models) {
      // define association here
    }
  };
  PassengerFlight.init({
    PassengerId: DataTypes.INTEGER,
    FlightId: DataTypes.INTEGER,
    bookingId: DataTypes.STRING,
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    dateFlight: DataTypes.DATE,
    timeFlight: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PassengerFlight',
  });
  return PassengerFlight;
};
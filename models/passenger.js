'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Passenger extends Model {
    static associate(models) {
      Passenger.belongsToMany(models.Flight, { through: models.PassengerFlight })
    }
  };
  Passenger.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Passenger',
  });
  return Passenger;
};
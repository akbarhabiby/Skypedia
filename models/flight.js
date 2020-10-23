'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    static associate(models) {
      Flight.belongsToMany(models.User, { through: models.UserFlight })
      Flight.belongsTo(models.Airline)
      Flight.belongsTo(models.AvailableFlight)
    }

    convertMoney(money) {
      return `Rp. ${money},00`
    }

  };
  Flight.init({
    flightNumber: DataTypes.STRING,
    AirlineId: DataTypes.INTEGER,
    AvailableFlightId: DataTypes.INTEGER,
    dateflight: DataTypes.DATE,
    timeflight: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};
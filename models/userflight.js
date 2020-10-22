'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserFlight extends Model {
    static associate(models) {
      // throught this Model
    }
  };
  UserFlight.init({
    UserId: DataTypes.INTEGER,
    FlightId: DataTypes.INTEGER,
    bookingId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserFlight',
  });
  return UserFlight;
};
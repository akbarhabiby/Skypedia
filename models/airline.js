'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airline extends Model {
    static associate(models) {
      Airline.hasMany(models.Flight)
    }
  };
  Airline.init({
    airlineName: DataTypes.STRING,
    website: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Airline',
  });
  return Airline;
};
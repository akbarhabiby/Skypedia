'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AvailableFlight extends Model {
    static associate(models) {
      AvailableFlight.hasMany(models.Flight)
      AvailableFlight.belongsTo(models.Airport)
    }

    static penerbangan(from, to) {
      return `${from} ke ${to}`
    }
  };
  AvailableFlight.init({
    FromIATA: DataTypes.STRING,
    ToIATA: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AvailableFlight',
  });
  return AvailableFlight;
};
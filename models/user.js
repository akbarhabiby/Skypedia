'use strict';
const bcrypt = require('bcryptjs')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Flight, { through: models.UserFlight })
      User.addHook('beforeCreate', (instance, options) => {
        let hashedPassword = bcrypt.hashSync(instance.password, 9)
        instance.password = hashedPassword
      })
      User.addHook('beforeUpdate', (instance, options) => {
        if (!instance.last_name) {
          instance.last_name = instance.first_name
        }
      })
    }
    
    fullName(first, last) {
      return `${first} ${last}`
    }
  };
  User.init({
    first_name: { type: DataTypes.STRING, validate: { notEmpty: { args: true, msg: 'Nama Depan tidak boleh kosong'}}},
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
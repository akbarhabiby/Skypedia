'use strict';
const bcrypt = require('bcryptjs')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.addHook('beforeCreate', (instance, options) => {
        let hashedPassword = bcrypt.hashSync(instance.password, 9)
        instance.password = hashedPassword
      })
    }
  };
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: { type: DataTypes.STRING, validate: { notEmpty: { args: true, msg: 'Email tidak boleh kosong'}}},
    password: { type: DataTypes.STRING, validate: { notEmpty: { args: true, msg: 'Password tidak boleh kosong'}}}
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
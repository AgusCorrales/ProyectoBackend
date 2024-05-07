'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  static associate(models) {
      User.hasMany(models.Order)
    }
  }
  User.init({
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor introduce tu nombre"
        }
      }
    },  
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{
          msg: "Por favor introduce tu apellido "
        }
      }
    },  
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor introduce tu correo"
        },
        isEmail: {
          msg: "Por favor introduce un correo válido"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User'
  });
  
  return User;
};
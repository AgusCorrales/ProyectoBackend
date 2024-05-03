'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderproduct extends Model {
    static associate(models) {
      
    }
  }
  orderproduct.init({
    OrderId: DataTypes.INTEGER,
    ProductId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'orderproduct',
  });
  return orderproduct;
};
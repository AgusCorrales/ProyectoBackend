'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsToMany(models.Category,{
        through:models.CategoryProduct
      },
      Product.belongsToMany(models.Order,{
        through:models.orderproduct

      }))
     
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor introduce un producto",
        }
      }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Por favor introduce un precio",
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  
  return Product;
}; 
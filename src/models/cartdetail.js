'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CartDetail.init({
    order_id: DataTypes.UUID,
    product_id: DataTypes.INTEGER,
    quanity: DataTypes.INTEGER,
    unit_price: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CartDetail',
  });
  return CartDetail;
};
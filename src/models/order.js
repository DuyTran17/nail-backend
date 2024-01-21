'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
 
  Order.init({
    order_id:DataTypes.UUID,
    guest_name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    payment: DataTypes.STRING,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
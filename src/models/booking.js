'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  //    name: 'Tú',
  //           phone: '0936545612',
  //           service: 'sv2',
  //           date: '12/03/2024',
  //           time: '17:30'
  Booking.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    service: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};
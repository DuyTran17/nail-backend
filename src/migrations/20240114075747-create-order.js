'use strict';
/** @type {import('sequelize-cli').Migration} */
// order_id:DataTypes.STRING(100),
//     guest_name: DataTypes.STRING,
//     address: DataTypes.STRING,
//     phone: DataTypes.STRING,
//     payment: DataTypes.STRING,
//     total:DataTypes.INTERGER,
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      order_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(100)
      },
      guest_name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      payment: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        productName: 'san pham 1',
        productImages: "product_1.jpg",
        price: 50000
      },
      {
        productName: 'san pham 2',
        productImages: "product_2.jpg",
        price: 100000
      },
      {
        productName: 'san pham 3',
        productImages: "product_2.jpg",
        price: 85000
      },
      {
        productName: 'san pham 4',
        productImages: "product_1.jpg",
        price: 70000
      }
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
 

    */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "roles",
      [
        {
          role: "SUPER ADMIN",
          level: 1,
          actions: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          role: "ADMIN",
          level: 2,
          actions: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          role: "CLIENT",
          level: 3,
          actions: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", null, {});
  },
};

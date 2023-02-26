"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("attendances", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      name: {
        type: Sequelize.STRING,
      },
      attendanceStatus: {
        type: Sequelize.ENUM,
        values: ["ABSENT", "PRESENT", "MORNING HALF", "AFTERNOON HALF"],
        defaultValue: "PRESENT",
      },

      workingFrom: {
        type: Sequelize.ENUM,
        values: ["OFFICE", "HOME", "LEAVE"],
        defaultValue: "OFFICE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("attendances");
  },
};

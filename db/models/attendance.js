"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class attendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // users.hasOne(db.roles, {
      //   foreignKey: "roles_id",
      //   as: "roles",
      // });
    }
  }
  attendance.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      attendanceStatus: {
        type: DataTypes.ENUM,
        values: ["ABSENT", "PRESENT", "MORNING HALF", "EVENING HALF"],
        defaultValue: "OFFICE",
      },
      // workingHours: {
      //   type: DataTypes.INTEGER,
      // },
      workingFrom: {
        type: DataTypes.ENUM,
        values: ["OFFICE", "HOME", "LEAVE"],
        defaultValue: "OFFICE",
      },
    },
    {
      sequelize,
      modelName: "attendance",
    }
  );
  return attendance;
};

"use strict";
const { Model } = require("sequelize");
// const Roles = require("../models/roles.js")(sequelize, Sequelize);

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.hasMany(models.userroles, {
        foreignKey: "user_id",
        as: "user_roles",
      });
    }
  }
  users.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },

      status: {
        type: DataTypes.ENUM,
        values: ["ACTIVE", "INACTIVE", "SUSPENDED"],
        defaultValue: "ACTIVE",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "users",
    }
  );

  return users;
};

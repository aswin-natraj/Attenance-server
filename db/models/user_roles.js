"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userroles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userroles.belongsTo(models.users, {
        foreignKey: "user_id",
        as: "users",
      });
      userroles.belongsTo(models.roles, {
        foreignKey: "role_id",
        as: "roles",
      });
    }
  }
  userroles.init(
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        unique: true,
        references: {
          key: "id",
          model: "users",
        },
      },
      role_id: {
        type: DataTypes.INTEGER,
        unique: true,
        references: {
          key: "id",
          model: "roles",
        },
      },
    },
    {
      sequelize,
      modelName: "userroles",
    }
  );
  return userroles;
};

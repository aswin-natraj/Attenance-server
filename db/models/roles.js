"use strict";
const { Model } = require("sequelize");
// const User = require("../db/models/user.js")(sequelize, Sequelize);

module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      roles.hasOne(models.userroles, {
        foreignKey: "role_id",
        as: "user_roles",
      });
    }
  }
  roles.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
      },
      role: {
        type: DataTypes.ENUM,
        values: ["SUPER ADMIN", "ADMIN", "CLIENT"],
      },
      level: {
        type: DataTypes.INTEGER,
      },
      actions: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "roles",
    }
  );

  return roles;
};

const { Sequelize } = require("sequelize");

const rootInstance = new Sequelize("attenance_db", "tesark", "qwerty123", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = rootInstance;

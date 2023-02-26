const express = require("express");
const jwt = require("jsonwebtoken");
const { Sequelize } = require("sequelize");
const { sequelize } = require("../db/models/index.js");
const User = require("../db/models/user.js")(sequelize, Sequelize);
const UserRole = require("../db/models/user_roles.js")(sequelize, Sequelize);
const Role = require("../db/models/roles.js")(sequelize, Sequelize);

const hash = require("bcrypt");
const db = require("../db/models");

class authServices {
  async SignUpUser(req, res) {
    const { name, email, password, roleId } = req.body;

    //HASHING PASSWORD

    const hashedPassword = await hash.hash(password, 10);

    const data = {
      name: name,
      email: email,
      password: hashedPassword,
    };

    try {
      const user = await User.create(data);
      const userLength = User.findAll();

      const userId = (await userdata).length;
      const roleData = res.json(user);

      // const role = await Role.create(roleData).then(() => {
      //   res.json(role);
      // });
    } catch (error) {
      console.log(error);
    }
  }

  //LOOKUP API
  async LookupService(req, res) {
    console.log(req);
    const userData = await User.findByPk(req.currentUser.id, {
      attributes: { exclude: ["password", "updatedAt", "createdAt"] },
    });
    const userRole = await UserRole.findOne({
      where: { user_id: req.currentUser.id },
    });

    const Roles = await Role.findOne({
      where: { id: userRole.role_id },
      attributes: ["id", "role"],
    });

    console.log(Roles, "huu");
    const data = { userData, Roles };
    res.status(200);
    return res.json(data);
  }
  //
  async LoginUserService(req, res) {
    const email = req.body.email;

    //GETTING THE USER

    const userEmail = await User.findOne({ where: { email: email } });

    console.log(userEmail);

    //CHECKING THE USER

    if (userEmail) {
      const { id } = userEmail;
      const accessToken = jwt.sign(id, process.env.ACCESS_TOKEN);

      res.send({ access: accessToken });
    } else {
      return res.sendStatus(401);
    }
  }
}

module.exports = authServices;

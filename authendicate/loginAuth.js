const jwt = require("jsonwebtoken");
const { Sequelize } = require("sequelize");
const { sequelize } = require("../db/models/index.js");
const User = require("../db/models/user.js")(sequelize, Sequelize);

async function authUser(req, res, next) {
  const authHeader = req.headers.authorization;

  //   console.log(authHeader);
  const token = authHeader && authHeader;
  // console.log(token, "   token");
  if (token === null) return res.sendStatus(401);

  //   console.log(process.env.ACCESS_TOKEN, "   accesstoken");

  jwt.verify(token, process.env.ACCESS_TOKEN, async (err, userid) => {
    if (!userid) {
      return res.sendStatus(403);
    }
    const user = await User.findByPk(userid);
    req.currentUser = user;
    next();
  });
  // const userId = await User.findByPk(req.user);
  // req.userdata = userId;
}

module.exports = authUser;

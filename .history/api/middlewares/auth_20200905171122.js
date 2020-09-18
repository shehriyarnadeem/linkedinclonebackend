const bcrypt = require("bcrypt");
const User = require("../../models/User");

const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
  console.log(jwt.verify(token, "qwerty123"));
  try {
    const token = req.header("Authorization");

    const decoded = jwt.verify(token, "qwerty123");

    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error("User not found");
    }
    req.user = user;
    req.token = token;
    next();
  } catch (e) {
    res.status(401).send({ error: "User not logged in" });
  }
};

module.exports = { verifyToken };

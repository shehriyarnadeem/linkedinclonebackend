const bcrypt = require("bcrypt");
const User = require("../../models/User");

const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    const decoded = jwt.verify(token, "qwerty123");
    console.log(decoded);
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
    console.log();
    res.status(401).send({ error: "User not logged in" });
  }
};

module.exports = { verifyToken };

const bcrypt = require("bcrypt");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    console.log(jwt.verify(token, JWT_SECRET));
    const decoded = jwt.verify(token, JWT_SECRET);
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
    // next();
  } catch (e) {
    console.log(jwt.verify(token, JWT_SECRET));
    res.status(401).send({ error: "User not logged in" });
  }
};

module.exports = { verifyToken };

const bcrypt = require("bcrypt");
const User = require('../../models/User')
const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  const decodedToken = bcrypt.verify(token, "qwerty123");
  const user = 

  //  next();

  // const tokens = req.tokens;
};

module.exports = { verifyToken };

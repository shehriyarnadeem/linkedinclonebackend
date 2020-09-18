const bcrypt = require("bcrypt");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  const decodedToken = bcrypt.verify();

  //  next();

  // const tokens = req.tokens;
};

module.exports = { verifyToken };

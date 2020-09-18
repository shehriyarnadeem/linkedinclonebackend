const bcrypt = require("bcrypt");

const verifyToken = (req, res, next) => {
  
  const token = req.header('Authorization');
  const decodedToken = bcrypt.

  //  next();

  // const tokens = req.tokens;
};

module.exports = { verifyToken };

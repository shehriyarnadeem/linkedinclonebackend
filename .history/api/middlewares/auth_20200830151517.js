const bcrypt = require("bcrypt");

const verifyToken = (req, res, next) => {
  console.log("over here");
  // next();

  // const tokens = req.tokens;
};

module.exports = { verifyToken };

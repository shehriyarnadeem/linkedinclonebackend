const bcrypt = require("bcrypt");
const User = require("../../models/User");
const verifyToken = async (req, res, next) => {
  const token = req.header("Authorization");
  const decodedToken = bcrypt.verify(token, "qwerty123");
  const user = await User.findOne({
    _id:decodedToken._id
    'tokens.token':token
  });

  //  next();

  // const tokens = req.tokens;
};

module.exports = { verifyToken };

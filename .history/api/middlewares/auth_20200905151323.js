const bcrypt = require("bcrypt");
const User = require("../../models/User");
const verifyToken = async (req, res, next) => {
  console.log(req.header("Authorization"));
  try {
    const token = req.header("Authorization");

    const decoded = jwt.verify(token, JWT_SECRET);

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

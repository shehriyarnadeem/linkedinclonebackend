const bcrypt = require("bcrypt");
const User = require("../../models/User");

const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    console.log(jwt.verify(token, 'qwerty123');
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
    // next();
  } catch (e) {
    console.log(
      jwt.verify(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjRiNzljMWNhZGNhODQxODM4NzhlNTIiLCJpYXQiOjE1OTkzMDA4ODV9.CwfT2YWTxNNzIovu_VCoFchrEmbCwC5hrndAwWnQGT4",
        JWT_SECRET
      )
    );
    res.status(401).send({ error: "User not logged in" });
  }
};

module.exports = { verifyToken };

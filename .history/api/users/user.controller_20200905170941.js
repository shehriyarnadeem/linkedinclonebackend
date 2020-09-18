const User = require("../../models/User");
const { createUser } = require("./user.service");
const { responseCallback } = require("../../Utils");

const register = (req, res) => {
  const body = req.body;
  createUser(body, (err, results) => {
    if (err) {
      res.status(400).send({ message: err });
    }
    if (results) {
      res.status(200).send({ data: results });
    }
  });
};

const login = async (req, res) => {
  const body = req.body;
  try {
    const user = await User.findByCredentials(body.email, body.password);
    if (!user) {
      return res.status(400).send("Invalid username or password");
    }
    const token = await user.generateAuthToken();
    if (token) {
      return res
        .status(200)
        .send({ message: "User logged in", data: user, token: token });
    }
  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
};

const logout = (req, res) => {
  req.user.tokens = req.user.tokens.filter((token) => {
    token.token !== req.token;
  });

  res.user;
};

module.exports = { register, login, logout };

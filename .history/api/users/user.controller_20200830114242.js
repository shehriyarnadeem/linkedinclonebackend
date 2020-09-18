const { createUser } = require("./user.service");
const { responseCallback } = require("../../Utils");
const register = (req, res) => {
  const body = req.body;

  createUser(body, responseCallback);
};

module.exports = { register };

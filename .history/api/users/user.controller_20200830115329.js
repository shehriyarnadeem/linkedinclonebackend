const { createUser } = require("./user.service");
const { responseCallback } = require("../../Utils");
const register = (req, res) => {
  const body = req.body;
  const result = createUser(body);
  if (result) {
    responseCallback(null, result, res);
  }
};

module.exports = { register };

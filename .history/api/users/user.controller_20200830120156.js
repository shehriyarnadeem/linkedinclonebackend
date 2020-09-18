const { createUser } = require("./user.service");
const { responseCallback } = require("../../Utils");
const register = (req, res) => {
  const body = req.body;
  console.log(body);
  const result = createUser(body, responseCallback, res);
  if (result) {
    responseCallback(null, result, res);
  }
};

module.exports = { register };

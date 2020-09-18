const { createUser } = require("./user.service");
const { responseCallback } = require("../../Utils");
const register = (req, res) => {
  const body = req.body;
  createUser(body, (err, results) => {
    if (err) {
      res.status(400).send({ message: err.message });
    }
  });
};

module.exports = { register };

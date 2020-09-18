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

const login = (req, res) => {
  const body = req.body;
  try {
    const user = User.findByCredentials(body.email, body.password);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { register };

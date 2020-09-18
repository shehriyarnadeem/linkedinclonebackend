const { createUser } = require("./user.service");

const register = (req, res) => {
  const body = req.body;

  createUser(body, (err, results) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(results);
  });
};

module.exports = { register };

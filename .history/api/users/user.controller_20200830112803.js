const { createUser } = require("./user.service");

const register = (req, res) => {
  const body = req.body;

  createUser(body, (err, results) => {
    if(err)
  })
};

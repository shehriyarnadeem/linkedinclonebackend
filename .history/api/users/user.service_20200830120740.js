const User = require("../../models/User");

const createUser = async (user, responseCallback, res) => {
  const initiateUser = new User(user);
  console.log(user);

  try {
    const user = await initiateUser.save();
    console.log(user);
  } catch (e) {
    console.log(e.message);
    res.status(400).send(e.message);
  }
};

module.exports = { createUser };

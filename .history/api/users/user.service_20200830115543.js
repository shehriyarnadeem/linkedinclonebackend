const User = require("../../models/User");

const createUser = async (user, res) => {
  const initiateUser = new User(user);

  try {
    const user = await initiateUser.save();
    return user;
  } catch (e) {
    return res.status(400).send(e);
  }
};

module.exports = { createUser };

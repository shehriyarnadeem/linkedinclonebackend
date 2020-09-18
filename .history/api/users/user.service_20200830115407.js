const User = require("../../models/User");

const createUser = async (user) => {
  const initiateUser = new User(user);

  try {
    const user = await initiateUser.save();
    return user;
  } catch (e) {
    return;
  }
};

module.exports = { createUser };

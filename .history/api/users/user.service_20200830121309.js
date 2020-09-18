const User = require("../../models/User");

const createUser = async (user, responseCallback) => {
  const initiateUser = new User(user);

  try {
    const user = await initiateUser.save();
  } catch (e) {
    responseCallback(e.message);
  }
};

module.exports = { createUser };

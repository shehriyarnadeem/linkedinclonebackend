const User = require("../../models/User");

const createUser = async (user, responseCallback) => {
  const initiateUser = new User(user);

  try {
    const user = await initiateUser.save();
    responseCallback(null, user);
  } catch (e) {
    responseCallback(e.message);
  }
};

module.exports = { createUser };

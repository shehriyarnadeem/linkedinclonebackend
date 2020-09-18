const User = require("../../models/User");

const createUser = async (user, callBack, res) => {
  const initiateUser = new User(user);

  try {
    await initiateUser.save();
    callBack(null, initiateUser, res);
  } catch (e) {
    callBack(e.message, null, res);
  }
};

module.exports = { createUser };

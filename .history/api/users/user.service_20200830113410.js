const User = require("../../models/User");

const createUser = async (user, callBack) => {
  const initiateUser = new User(user);

  try {
    await initiateUser.save();
    callBack(null, initiateUser);
  } catch (e) {
    callBack(e.message);
  }
};

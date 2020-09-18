const User = require("../../models/User");

const createUser = async (user, res) => {
  const initiateUser = new User(user);
  console.log(user);

  try {
    const user = await initiateUser.save();
    console.log(user);
  } catch (e) {
    return res.send(e.message);
  }
};

module.exports = { createUser };

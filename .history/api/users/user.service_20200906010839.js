const User = require("../../models/User");
const bcrypt = require("bcrypt");
const createUser = async (user, responseCallback) => {
  user.password = bcrypt.hashSync(user.password, 10);
  const initiateUser = new User(user);

  try {
    const user = await initiateUser.save();
    responseCallback(null, user);
  } catch (e) {
    responseCallback(e.message);
  }
};

const createPost = async (post, responseCallback) => {
  const newPost = new Post(post);

  try {
    const user = await newPost.save();
    responseCallback(null, user);
  } catch (e) {
    responseCallback(e.message);
  }
};

module.exports = { createUser };

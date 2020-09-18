const User = require("../../models/User");
const Post = require("../../models/Post");
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
    const post = await newPost.save();
    responseCallback(null, post);
  } catch (e) {
    responseCallback(e.message);
  }
};

module.exports = { createUser, createPost };

const User = require("../../models/User");
const Post = require("../../models/Post");
const bcrypt = require("bcrypt");
const { responseCallback } = require("../../Utils");
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

const createPost = async (post, userId, responseCallback) => {
  console.log({ ...post });
  const newPost = new Post({
    ...post,
    owner: userId,
  });
  try {
    const post = await newPost.save();
    responseCallback(null, post);
  } catch (e) {
    responseCallback(e.message);
  }
};

const getPost = async (body, userId, responseCallback) => {
  try {
    const user = await User.findById(userId);
    try {
      const usersPosts = await user.populate("posts").execPopulate();
      responseCallback(null, usersPosts.posts);
    } catch (e) {
      responseCallback(e.message);
    }
  }
};

module.exports = { createUser, createPost };

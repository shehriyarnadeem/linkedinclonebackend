const Post = require("../../models/Post");
const User = require("../../models/User");
const { createPost } = require("./user.service");
const { responseCallback } = require("../../Utils");

const postCreate = (req, res) => {
  const body = req.body;
  const userId = req.user._id;
  createPost(body, userId, (err, results) => {
    if (err) {
      res.status(400).send({ message: err });
    }
    if (results) {
      res.status(200).send({ data: results });
    }
  });
};

const getPost = async (req, res) => {
  const userId = req.user._id;
  try {
    const user = await User.findById(userId);
    const usersPosts = await user.populate("posts").execPopulate();
    console.log(usersPosts.posts.length());
    res.status(200).send({ data: usersPosts.posts });
  } catch (e) {
    res.status(400).send({ message: e });
  }
};

module.exports = { postCreate, getPost };

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

const getPost = (req, res) => {
  const body = req.body;
  const userId = req.user._id;
  const user = User.findById(userId);
  console.log(user);

  // const post = user.populate("post").execProp;
  // console.log(post);
  // if (err) {
  //   res.status(400).send({ message: err });
  // }
  // if (results) {
  //   res.status(200).send({ data: results });
  // }
  // return;
};

module.exports = { postCreate, getPost };

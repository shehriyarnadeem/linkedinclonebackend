const Post = require("../../models/Post");
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
  console.log(userId);
  return;
};

module.exports = { postCreate, getPost };

const Post = require("../../models/Post");
const User = require("../../models/User");
const { createPost, getUsersPost } = require("./user.service");

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
  const body = req.body;
  const userId = req.user._id;
  getUsersPost(body, userId, (err, results) => {
    if (err) {
      res.status(400).send({ message: err });
    }
    if (results) {
      res.status(200).send({ results });
    }
  });
};

module.exports = { postCreate, getPost };

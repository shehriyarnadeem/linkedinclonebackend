const Post = require("../../models/Post");
const { createPost } = require("./user.service");
const { responseCallback } = require("../../Utils");

const createPost = (req, res) => {
  const body = req.body;
  createPost(body, (err, results) => {
    if (err) {
      res.status(400).send({ message: err });
    }
    if (results) {
      res.status(200).send({ data: results });
    }
  });
};

module.exports = { createPost };

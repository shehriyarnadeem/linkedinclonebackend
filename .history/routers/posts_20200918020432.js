const express = require("express");
const router = new express.Router();
const Post = require("../models/Post");

router.post("/post", async (req, res) => {
  const body = req.body;
  const userId = req.user._id;

  const newPost = new Post({
    ...post,
    owner: userId,
  });
  try {
    const post = await newPost.save();
    res.status(200).send({ success: 1, data: post });
  } catch (e) {
    res.status(400).send({ success: 0, err: "Unable to create the post" });
  }
});

router.get("/post", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status({ success: 1, data: posts });
  } catch (e) {
    res.status({ success: 0, err: "No record found" });
  }
});

module.exports = router;

const express = require("express");
const router = new express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const body = req.body;
  const userId = req.user._id;

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
});

module.exports = router;

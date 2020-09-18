const express = require("express");
const router = new express.Router();
const Post = require("../models/Post");
const { PUSHER } = require("../config");

router.post("/post", async (req, res) => {
  const body = req.body;
  console.log(body.text, "2323");

  const newPost = new Post({
    ...body,
  });
  try {
    await newPost.save().then((post1) => {
      PUSHER.trigger("post-channel", "post-create", {
        succes: 1,
        data: post1,
      });
      res.status(200).send({ success: 1, data: post1 });
    });
  } catch (e) {
    res.status(400).send({ success: 0, err: "Unable to create the post" });
  }
});

router.get("/post", async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ createdAt: -1 });
    res.status(200).send({ success: 1, data: posts });
  } catch (e) {
    res.status(400).send({ success: 0, err: "No record found" });
  }
});

module.exports = router;

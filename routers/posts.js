const express = require("express");
const router = new express.Router();
const Post = require("../models/Post");
const Pusher = require("pusher");

var pusher = new Pusher({
  appId: "1073102",
  key: "89571dc3bb0b3e616bcb",
  secret: "29e294b0a578732accfe",
  cluster: "ap2",
  encrypted: true,
});

router.post("/post", async (req, res) => {
  const body = req.body;
  const newPost = new Post({
    ...body,
  });
  try {
    await newPost.save().then((newPost) => {
      pusher.trigger("post-channel", "post-create", {
        succes: 1,
        data: newPost,
      });
      res.status(200).send({ success: 1, data: newPost });
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

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
  console.log(body.post, "2323");

  const newPost = new Post({
    ...body.text,
  });
  try {
    const post = await newPost.save().then((post1) => {
      pusher.trigger("post-channel", "post-create", {
        posts: post1,
      });
    });

    res.status(200).send({ success: 1, data: post });
  } catch (e) {
    res.status(400).send({ success: 0, err: "Unable to create the post" });
  }
});

router.get("/post", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).send({ success: 1, data: posts });
  } catch (e) {
    res.status(400).send({ success: 0, err: "No record found" });
  }
});

module.exports = router;

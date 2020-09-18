const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      max: 20,
      trim: true,
    },
  },
  { timestamps: true }
);
const Post = mongoose.model("Post", PostSchema);
module.exports = Post;

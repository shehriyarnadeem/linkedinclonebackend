const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const PostSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    max: 20,
  },
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   validate(value) {
  //     if (!validator.isEmail(value)) {
  //       throw new Error("Invalid email format");
  //     }
  //   },
  // },
});
const Post = mongoose.model("Post", PostSchema);
module.exports = Post;

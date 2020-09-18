const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/auth");
const {
  register,
  login,
  logout,
  authenticatedUser,
} = require("./user.controller");
const { postCreate, getPost } = require("./post.controller");

router.post("/register", verifyToken, register);
router.post("/create/post", verifyToken, postCreate);
router.get("/posts", verifyToken, getPost);
router.get("/authUser", verifyToken, authenticatedUser);
router.get("/logout", verifyToken, logout);
router.post("/login", login);

module.exports = router;

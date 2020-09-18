const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/auth");
const { register, login, logout } = require("./user.controller");
const { postCreate } = require("./post.controller");

router.post("/register", verifyToken, register);
router.post("/create/post", verifyToken, postCreate);
router.get("/post", verifyToken, postCreate);
router.get("/logout", verifyToken, logout);
router.post("/login", login);

module.exports = router;

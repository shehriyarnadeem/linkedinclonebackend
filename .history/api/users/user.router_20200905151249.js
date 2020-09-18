const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/auth");
const { register, login, logout } = require("./user.controller");

router.post("/register", verifyToken, register);
router.post("/logout", verifyToken, logout);
router.post("/login", login);

module.exports = router;

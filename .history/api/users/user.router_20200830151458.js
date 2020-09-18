const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/auth");
const { register, login } = require("./user.controller");

router.post("/register", verifyToken, register);
router.post("/login", login);

module.exports = router;

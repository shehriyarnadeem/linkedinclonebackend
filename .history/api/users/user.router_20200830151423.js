const express = require("express");
const router = express.Router();
const { checkToken } = require("../middlewares/auth");
const { register, login } = require("./user.controller");

router.post("/register", register);
router.post("/login", login);

module.exports = router;

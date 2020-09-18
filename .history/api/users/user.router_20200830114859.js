const express = require("express");
const router = express.Router();
const { register } = require("./user.controller");

router.post("/api", register);

const express = require("express");
const router = new express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const body = req.body;
  const userId = req.user._id;
});

module.exports = router;

const express = require("express");
const router = new express.Router();
const User = require("../models/User");

router.post("/register", async (res, req) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status();
  }
});

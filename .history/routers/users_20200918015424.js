const express = require("express");
const router = new express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send({ message: "Problem inserting user" });
  }
});

router.post("/login", async (req, res) => {
  const body = req.body;
  try {
    const user = await User.findByCredentials(body.email, body.password);
    if (!user) {
      return res.status(400).send("Invalid username or password");
    }
    const token = await user.generateAuthToken();
    if (token) {
      return res
        .status(200)
        .send({ message: "User logged in", data: user, token: token });
    }
  } catch (e) {
    return res.status(400).send({ message: e.message });
  }
});

module.exports = router;

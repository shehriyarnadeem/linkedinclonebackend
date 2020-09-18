const express = require("express");
const router = new express.Router();
const User = require("../models/User");

router.post("/register", async (res, req) => {
  console.log("ok fine lets go");
});

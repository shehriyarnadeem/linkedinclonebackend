const express = require("express");
const userRouter = require("./routers/users");
const app = express();
require("./db/mongoose");

app.use(express.json());
app.use(userRouter);

module.exports = app;

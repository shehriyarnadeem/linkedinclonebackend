const express = require("express");
const userRouter = require("./routers/users");
const app = express();
require("./db/mongoose");

app.use();
// app.use(express.static(path.join(__dirname, "client/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

module.exports = app;

const express = require("express");
const postRouter = require("./routers/posts");
const cors = require("cors");
const app = express();
require("./db/mongoose");

app.use(cors());
app.use(express.json());
app.use(postRouter);

app.listen(3000, () => console.log("Server started on port 3000"));

const express = require("express");
const postRouter = require("./routers/posts");
const cors = require("cors");
const app = express();
require("./db/mongoose");

app.use(cors());
app.use(express.json());
app.use(postRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server started on port 3000"));

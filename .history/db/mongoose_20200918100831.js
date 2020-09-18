const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/linkedinclone", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: true, // for unique email
});

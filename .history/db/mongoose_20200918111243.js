const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Shehriyar123:rules981@cluster0.kdasq.mongodb.net/linkedinclone?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    autoIndex: true, // for unique email
  }
);

const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email format");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new Error("Invalid Email");
  }
  const isMatch = bcrypt.compareSync(user.password, password);
  if (!isMatch) {
    throw new Error("Invalid password");
  }

  return checkEmail;
};

const User = mongoose.model("User", UserSchema);
module.exports = User;

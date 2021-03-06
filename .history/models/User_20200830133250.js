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
  const checkEmail = await User.findOne({ email: email });
  if (!checkEmail) {
    throw new Error("Invalid Email");
  }
  const isMatch = bcrypt.compareSync(checkEmail.password, password);
  const checkPassword = await User.fin;
  return checkEmail;
};

const User = mongoose.model("User", UserSchema);
module.exports = User;

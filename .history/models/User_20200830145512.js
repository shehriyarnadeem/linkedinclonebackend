const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
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
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
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

  UserSchema.methods.generateAuthToken = async () => {
    const user = this;
    user.password = undefined;
    const token = jwt.sign({ user: user }, "qwerty123");
    user.tokens = user.tokens.concat({ token });
    await user.save();
  };

  return user;
};

const User = mongoose.model("User", UserSchema);
module.exports = User;

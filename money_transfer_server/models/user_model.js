const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      required: true,
      type: String,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      required: true,
      type: String,
      trim: true,
    },
    password: {
      required: true,
      type: String,
    },
    pin: {
      required: false,
      type: String,
    },
    balance: {
      type: Number,
      required: true,
      default: 0,
    },
    type: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;

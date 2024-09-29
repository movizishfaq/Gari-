const mongoose = require("mongoose");

const userschema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: Number,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: false,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukleU1059SFH-flP36qRWECpm9pQfQ7f50Q&s",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("usertable", userschema);

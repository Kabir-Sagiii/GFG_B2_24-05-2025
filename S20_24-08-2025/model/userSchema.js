const mongoose = require("mongoose");

//Create Scehma Object : Defining the structure of Document
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "abc",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  city: {
    type: String,
  },
  gender: {
    type: String,
  },
});

//Create Model Class
const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;

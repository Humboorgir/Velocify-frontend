import mongoose from "mongoose";
const user = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  id: String,
});
const userSchema = mongoose.model("userSchema", user);
module.exports = userSchema;

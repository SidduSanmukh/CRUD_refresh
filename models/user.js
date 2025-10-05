const mongoose = require("mongoose");

try {
  mongoose.connect("mongodb://localhost:27017/users");
  console.log("DB connected..");
} catch (error) {
  console.log("DB connection error");
}

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  image_url: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;

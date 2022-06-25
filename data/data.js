const mongoose = require("mongoose");
const modelObjects = require("../model");
const privateData = require("../private/data");

const db = mongoose.connect("mongodb://localhost:27017/SelfMadeDB");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
  email_username: String,
  email_password: String,
  is_admin: Boolean,
});
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
});

userSchema.loadClass(modelObjects.user);
adminSchema.loadClass(modelObjects.admin);
postSchema.loadClass(modelObjects.post);

const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Post = mongoose.model("Post", postSchema);

//unused for now
async function getFromDb() {
  // await adminJ.save();
  const results = await Admin.findOne({ is_admin: undefined });
  await Admin.deleteOne({ is_admin: undefined });
  console.log(results);
}
getFromDb();

module.exports.userModel = User;
module.exports.adminModel = Admin;
module.exports.postModel = Post;

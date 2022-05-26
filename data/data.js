const mongoose = require("mongoose");
const modelObjects = require("../model");

mongoose.connect("mongodb://localhost:27017/SelfMadeDB");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
});
const adminSchema = mongoose.Schema({
  username: String,
  password: String,
  email_username: String,
  email_password: String,
});
const postSchema = mongoose.Schema({
    
});

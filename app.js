const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const contactRoutes = require("./Routes/contactRoute");
const adminRoutes = require("./Routes/adminRoutes");

//
const app = express();
const posts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("Views", "Views");

app.get("/", (req, res) => {
  res.render("startPage.ejs", { posts: posts });
});

app.post("/", (req, res) => {
  const postData = req.body;
  console.log(postData);
  res.render("startPage.ejs", { posts: posts });
});
app.use("/admin", adminRoutes);
app.use("/Contact", contactRoutes);

app.listen(6969);

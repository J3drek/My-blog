const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const contactRoutes = require("./Routes/contactRoute");

//
const app = express();
const posts = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("Views", "Views");

app.get("/", (req, res, next) => {
  res.render("startPage.ejs", { posts: posts });
});

app.use("/Contact", contactRoutes);

app.listen(6969);

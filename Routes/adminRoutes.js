const express = require("express");
const mongoose = require("mongoose");
const mongoModels = require("../data/data");
const router = express.Router();

async function getFromDb() {
  const result = await mongoModels.adminModel.findOne({ is_admin: true });
  return result;
}
const adminData = getFromDb();

router.get("/login", (req, res) => {
  res.render("admin-login.ejs");
});

//DO SPRAWDZENIA
router.post("/login/panel", (req, res) => {
  adminData.then((data) => {
    if (
      req.body.AdminUsername === data.username &&
      req.body.AdminPassword === data.password
    ) {
      res.render("admin-panel.ejs");
    } else res.redirect(404, "/error");
  });
});

module.exports = router;

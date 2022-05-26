const express = require("express");
const privateData = require("../private/data");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const router = express.Router();
const mongoModels = require("../data/data");

const db = mongoose.connect("mongodb://localhost:27017/SelfMadeDB");

async function getSmth() {
  const results = await mongoModels.adminModel.findOne();
  const transporter = await nodemailer.createTransport({
    host: "poczta.o2.pl",
    port: 587,
    secure: false,
    auth: {
      user: results.email_username,
      pass: results.email_password,
    },
  });
  return transporter;
}

//nodemailer config

//=====================
router.get("/", (req, res, next) => {
  res.render("contact.ejs");
});

router.post("/", (req, res, next) => {
  const emailData = req.body;
  const message = {
    from: privateData.EMAIL_LOGIN,
    to: "jmorzyk138@wp.pl",
    subject: `${emailData.title}`,
    text: `${emailData.msgContent}`,
    html: `<p>${emailData.msgContent}</p>`,
  };

  getSmth().then((res) =>
    res.sendMail(message, (err) => {
      console.log(err);
    })
  );

  res.redirect(302, "/Contact/confirmation");
});

router.get("/confirmation", (req, res, next) => {
  res.render("confirmation.ejs");
});

module.exports = router;

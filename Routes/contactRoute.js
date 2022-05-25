const express = require("express");
const privateData = require("../private/data");
const nodemailer = require("nodemailer");
const router = express.Router();
//nodemailer config
const transporter = nodemailer.createTransport({
  host: "poczta.o2.pl",
  port: 587,
  secure: false,
  auth: {
    user: privateData.EMAIL_LOGIN,
    pass: privateData.EMAIL_PASS,
  },
});
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
  transporter.sendMail(message, (err) => {
    console.log(err);
  });
  res.redirect(302, "/Contact/confirmation");
});

router.get("/confirmation", (req, res, next) => {
  res.render("confirmation.ejs");
});

module.exports = router;

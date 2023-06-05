const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shahid@techwarelab.com",
    pass: "uhfdwoenqwplwggy", // naturally, replace both with your real credentials or an application-specific password
  },
});

const mailOptions = {
  from: "shahid@techwarelab.com",
  to: "cusat.shahid@gmail.com",
  subject: "nodemailer check",
  text: "This mail is transfered by nodemailer for testing purpose",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

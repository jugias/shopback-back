const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "garrison.cremin4@ethereal.email",
    pass: "6TgDWjd3wseuZvvSsw",
  },
});
transporter.verify().then(() => {
  console.log("Server is ready for send emails");
});

module.exports = transporter;

const nodemailer = require("nodemailer");
require('dotenv').config()
module.exports = {
  mailTriggerWithMeetingInvite: async function (email) {
  
    let transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAILE_PASS
    }
});

let mailOptions = {
  from:process.env.EMAIL_USERNAME, // sender address
  to: email,
  subject: 'Alert!',
  html:'<p>Please check temperature is exceeding</p>',
 };

let info = await transporter.sendMail(mailOptions)
console.log("Message sent: %s", info.messageId);
// Preview only available when sending through an Ethereal account
console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
};

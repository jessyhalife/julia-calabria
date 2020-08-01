const sgMail = require("@sendgrid/mail");

const sendMail = ({ email, title, message }) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "halife.jessy@gmail.com",
    from: process.env.MAIL_ADDRESS_FROM,
    subject: title,
    text: `From: ${email}. ${message}`,
  };
  sgMail.send(msg, function (err, cb) {
    return !err;
  });
};

export { sendMail };

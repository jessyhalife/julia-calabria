const sgMail = require("@sendgrid/mail");

const sendMail = (data) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { email, title, message } = data;
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

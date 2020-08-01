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
  return sgMail.send(msg, function (err, cb) {
    console.log(err);
    let { statusCode } = cb[0] || 400;
    return statusCode === 202;
  });
};

export { sendMail };

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendMail } from "../../lib/emailSender";

export default (req, res) => {
  const { email, title, message } = req.body;

  if (sendMail({ email, title, message })) res.send(200);
  else res.send(400);
};

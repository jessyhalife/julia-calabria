// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendMail } from "../../lib/emailSender";

export default (req, res) => {
  const { mail } = req.body;
  console.log(req.body);
  if (sendMail(mail)) res.send(200);
  else res.send(400);
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendMail } from "../../lib/emailSender";

export default async (req, res) => {
  const { email, title, message } = req.body;
  const rta = await sendMail({ email, title, message });
  if (rta) return res.status(200).send("");

  return res.status(400).send("error");
};

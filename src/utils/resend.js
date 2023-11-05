import { Resend } from "resend";
import { config } from "dotenv";

config();

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const MY_EMAIL_RESEND = process.env.MY_EMAIL_RESEND;
const MY_NAME_RESEND = process.env.MY_NAME_RESEND;
const SUBJECT_MESSAGE_RESEND = process.env.SUBJECT_MESSAGE_RESEND;
const HTML_MESSAGE_RESEND = process.env.HTML_MESSAGE_RESEND;

const resend = new Resend(RESEND_API_KEY);

export default function (email) {
  (async function () {
    try {
      const data = await resend.emails.send({
        from: `${MY_NAME_RESEND} <${MY_EMAIL_RESEND}@resend.dev>`,
        to: [email],
        subject: `${SUBJECT_MESSAGE_RESEND}`,
        html: `${HTML_MESSAGE_RESEND}`,
      });

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  })();
}

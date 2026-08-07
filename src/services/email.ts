import emailjs from "@emailjs/browser";

interface SendEmailParams {
  name: string;
  email: string;
  message: string;
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export async function sendEmail({ name, email, message }: SendEmailParams) {
  if (!SERVICE_ID) {
    throw new Error("Missing VITE_EMAILJS_SERVICE_ID");
  }

  if (!TEMPLATE_ID) {
    throw new Error("Missing VITE_EMAILJS_TEMPLATE_ID");
  }

  if (!PUBLIC_KEY) {
    throw new Error("Missing VITE_EMAILJS_PUBLIC_KEY");
  }

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    { name, email, message },
    PUBLIC_KEY,
  );
}

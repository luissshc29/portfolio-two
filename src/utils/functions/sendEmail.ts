import { MessageData } from "@/app/components/unique/ContactForm";
import { textVariants } from "../constants/textVariants";
import EmailTemplate from "@/app/components/unique/EmailTemplate";
import { Resend } from "resend";

export type SendEmailProps = {
  message: MessageData & { sentAt: string };
  language: "br" | "us";
};

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function sendEmail({ message, language }: SendEmailProps) {
  const emailSubject = `${textVariants.others.functions.sendEmail.subject.prefix[language]} - ${message.name}`;

  const emailObject = {
    from: message.email,
    to: [process.env.NEXT_PUBLIC_EMAIL as string],
    subject: emailSubject,
    react: EmailTemplate({ message, language }),
  };

  const { data, error } = await resend.emails.send(emailObject);

  return {
    data: data || null,
    error: JSON.stringify(error) || null,
  };
}

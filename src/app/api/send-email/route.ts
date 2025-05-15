import { MessageData } from "@/app/components/unique/ContactForm";
import EmailTemplate from "@/app/components/unique/EmailTemplate";
import { textVariants } from "@/utils/constants/textVariants";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export type SendEmailProps = {
  message: MessageData & { sentAt: string };
  language: "br" | "us";
};

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { message, language }: SendEmailProps = await request.json();

    const emailSubject = `${textVariants.others.functions.sendEmail.subject.prefix[language]}`;

    const emailObject = {
      from: `${message.name} <no-reply@luishenrique-dev.com.br>`,
      to: [process.env.NEXT_PUBLIC_EMAIL as string],
      subject: emailSubject,
      react: EmailTemplate({ message, language }),
    };

    const { data, error } = await resend.emails.send(emailObject);
    // console.log({ data, error });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

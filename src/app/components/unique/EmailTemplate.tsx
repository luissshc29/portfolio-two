import { textVariants } from "@/utils/constants/textVariants";
import { SendEmailProps } from "@/utils/functions/sendEmail";
import React from "react";

export default function EmailTemplate({ message, language }: SendEmailProps) {
  return (
    <ul className="flex flex-col gap-2 text-left">
      <li className="flex flex-col items-start gap-1 text-sm lg:text-base">
        <p className="text-sm">
          {
            textVariants.others.labels.contacts.contact.form.toast.success
              .accordion.content.message.sentBy[language]
          }
        </p>
        <p className="font-normal text-xs">
          {message.name} ({message.email})
        </p>
      </li>
      <li className="flex flex-col items-start gap-1 text-sm lg:text-base">
        <p className="text-sm">
          {
            textVariants.others.labels.contacts.contact.form.toast.success
              .accordion.content.message.sentAt[language]
          }
        </p>
        <p className="font-normal text-xs">{message.sentAt}</p>
      </li>
      <li className="flex flex-col items-start gap-1 text-sm lg:text-base">
        <p className="text-sm">
          {
            textVariants.others.labels.contacts.contact.form.toast.success
              .accordion.content.message.content[language]
          }
        </p>
        <p className="font-normal text-xs">{message.message}</p>
      </li>
    </ul>
  );
}

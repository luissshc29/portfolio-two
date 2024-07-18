"use client";

import React from "react";
import BgImageContainer from "../components/common/BgImageContainer";
import { useLanguageContext } from "@/utils/context/Language";
import { textVariants } from "@/utils/constants/textVariants";
import Title from "../components/common/Title";
import { MdContentCopy } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { useToast } from "@/shadcn/components/ui/use-toast";

export default function Contacts() {
  const { language } = useLanguageContext();

  const { toast } = useToast();

  function copyText(text: string) {
    navigator.clipboard.writeText(text);
    toast({
      title: textVariants.sections.contacts.toast.title[language],
      description: textVariants.sections.contacts.toast.description[language],
    });
  }

  return (
    <BgImageContainer
      src="/images/background/contacts-bg-img.jpg"
      id="contacts"
    >
      <div>
        <Title
          mainText={textVariants.sections.contacts.title.main[language]}
          bgText={textVariants.sections.contacts.title.bg[language]}
        />
        <h2 className="my-6 text-sm md:text-base">
          {textVariants.sections.contacts.subtitle[language]}
        </h2>
      </div>
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold md:text-base">
            {textVariants.others.labels.contacts.social[language]}:
          </span>
          <div className="flex flex-row items-center justify-center gap-2">
            {textVariants.sections.contacts.info.social.map((item) => (
              <div
                className={`icon relative flex w-fit flex-col items-center rounded-[30px] p-2.5 transition-all duration-200 ease-in-out hover:cursor-pointer ${item.text.toLowerCase()}`}
                key={item.id}
              >
                <span
                  className={`tooltip pointer-events-none absolute top-0 rounded-md px-2 py-1 text-sm text-white opacity-0 shadow-md transition-all duration-300 ease-in-out ${item.text.toLowerCase()}`}
                >
                  {item.text}
                </span>
                <a
                  key={item.id}
                  target="_blank"
                  href={
                    item.text.toLowerCase() === "whatsapp"
                      ? `${item.link}?phone=${textVariants.sections.contacts.info.phone.raw}&text=${textVariants.sections.contacts.info.whatsappMessage[language]}`
                      : item.link
                  }
                  className={`text-center text-sm font-semibold no-underline duration-300`}
                >
                  {item.component}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start justify-center gap-[2px]">
            <span className="text-sm font-semibold md:text-base">
              {textVariants.others.labels.contacts.phone[language]}:
            </span>
            <div className="flex justify-center gap-2">
              <p className="text-sm">
                {textVariants.sections.contacts.info.phone.text}
              </p>
              <MdContentCopy
                onClick={() =>
                  copyText(textVariants.sections.contacts.info.phone.raw)
                }
                className="text-lg hover:cursor-pointer"
              />
              <a
                className="text-lg"
                href={`tel:${textVariants.sections.contacts.info.phone.raw}`}
                target="_blank"
              >
                <IoMdCall />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[2px]">
            <span className="text-sm font-semibold md:text-base">
              {textVariants.others.labels.contacts.email[language]}:
            </span>
            <div className="flex justify-center gap-2">
              <p className="text-sm">
                {textVariants.sections.contacts.info.email.text}
              </p>
              <MdContentCopy
                onClick={() =>
                  copyText(textVariants.sections.contacts.info.email.text)
                }
                className="text-lg hover:cursor-pointer"
              />
              <a
                className="text-lg"
                href={`mailto:${textVariants.sections.contacts.info.email.text}`}
                target="_blank"
              >
                <HiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </BgImageContainer>
  );
}

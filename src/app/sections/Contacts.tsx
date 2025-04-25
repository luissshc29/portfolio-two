"use client";

import React from "react";
import BgImageContainer from "../components/common/BgImageContainer";
import { useLanguageContext } from "@/utils/context/LanguageContext";
import { textVariants } from "@/utils/constants/textVariants";
import Title from "../components/common/Title";
import { MdContentCopy, MdGroups2, MdPhoneForwarded } from "react-icons/md";
import { useToast } from "@/shadcn/components/ui/use-toast";
import { Alert, AlertTitle } from "@/shadcn/components/ui/alert";
import { TbMailShare, TbTriangleInvertedFilled } from "react-icons/tb";
import { PiMailboxFill, PiMapPinAreaFill } from "react-icons/pi";
import { GiRotaryPhone } from "react-icons/gi";

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
      darkImgSrc="/images/background/dark/contacts-bg-img.jpg"
      lightImgSrc="/images/background/light/contacts-bg-img.jpg"
      id="contacts"
    >
      <div>
        <Title
          mainText={textVariants.sections.contacts.title.main[language]}
          bgText={textVariants.sections.contacts.title.bg[language]}
        />
        <div className="my-6 text-sm md:text-base">
          {textVariants.sections.contacts.subtitle[language]}
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col justify-center gap-12 md:flex-row md:gap-2 lg:w-[90%]">
        <div className="flex w-full flex-col gap-2 md:w-1/3">
          <Title
            variant="with-bg-icon"
            mainText={textVariants.others.labels.contacts.social[language]}
            bgIcon={<MdGroups2 />}
          />
          <div className="flex flex-row items-center justify-center gap-2">
            {textVariants.sections.contacts.info.social.map((item) => (
              <div
                className={`icon relative flex w-fit flex-col items-center rounded-[30px] p-2.5 transition-all duration-200 ease-in-out hover:cursor-pointer ${item.text.toLowerCase()}`}
                key={item.id}
              >
                <span
                  className={`tooltip pointer-events-none absolute top-0 min-w-[100px] rounded-md py-1 text-sm opacity-0 shadow-md transition-all duration-300 ease-in-out ${item.text.toLowerCase()}`}
                >
                  <div className="relative flex w-full justify-center">
                    <TbTriangleInvertedFilled className="absolute bottom-[-60%]" />
                    {item.username || item.text}
                  </div>
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
        <div className="flex w-full flex-col items-center gap-8 md:w-1/3 md:gap-12">
          <div className="flex flex-col items-center justify-center gap-1">
            <Title
              variant="with-bg-icon"
              mainText={textVariants.others.labels.contacts.phone[language]}
              bgIcon={<GiRotaryPhone />}
            />
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
              >
                <MdPhoneForwarded />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <Title
              variant="with-bg-icon"
              mainText={textVariants.others.labels.contacts.email[language]}
              bgIcon={<PiMailboxFill />}
            />
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
              >
                <TbMailShare />
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 md:w-1/3 md:gap-4">
          <Title
            variant="with-bg-icon"
            mainText={textVariants.others.labels.contacts.location[language]}
            bgIcon={<PiMapPinAreaFill />}
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center gap-1 text-sm text-neutral-800 dark:text-neutral-300">
              <p>
                {textVariants.sections.contacts.info.location.city[language]}
              </p>
              <p>
                {textVariants.sections.contacts.info.location.state[language]}
              </p>
              <p>
                {textVariants.sections.contacts.info.location.country[language]}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Alert className="w-fit">
        <AlertTitle>
          {textVariants.sections.contacts.form.text[language]}
        </AlertTitle>
      </Alert>
    </BgImageContainer>
  );
}

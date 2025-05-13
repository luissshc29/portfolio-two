"use client";

import React from "react";
import BgImageContainer from "../components/common/BgImageContainer";
import { useLanguageContext } from "@/utils/context/LanguageContext";
import { textVariants } from "@/utils/constants/textVariants";
import Title from "../components/common/Title";
import { MdGroups2 } from "react-icons/md";
import { Alert, AlertTitle } from "@/shadcn/components/ui/alert";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { PiMailboxFill, PiMapPinAreaFill } from "react-icons/pi";
import { GiRotaryPhone } from "react-icons/gi";
import { Separator } from "@/shadcn/components/ui/separator";
import ContactForm from "../components/unique/ContactForm";
import ContactCard from "../components/common/card/ContactCard";

export default function Contacts() {
  const { language } = useLanguageContext();

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
      <div className="flex md:flex-row flex-col justify-center gap-12 md:gap-2 mx-auto w-full lg:w-[90%]">
        <div className="flex flex-col gap-2 w-full md:w-1/3">
          <Title
            variant="with-bg-icon"
            mainText={textVariants.others.labels.contacts.social[language]}
            bgIcon={<MdGroups2 />}
          />
          <div className="flex flex-row justify-center items-center gap-2">
            {textVariants.sections.contacts.social.media.map((item) => (
              <div
                className={`icon relative flex w-fit flex-col items-center rounded-[30px] p-2.5 transition-all duration-200 ease-in-out hover:cursor-pointer ${item.text.toLowerCase()}`}
                key={item.id}
              >
                <span
                  className={`tooltip pointer-events-none absolute top-0 min-w-[100px] rounded-md py-1 text-sm opacity-0 shadow-md transition-all duration-300 ease-in-out ${item.text.toLowerCase()}`}
                >
                  <div className="relative flex justify-center w-full">
                    <TbTriangleInvertedFilled className="bottom-[-60%] absolute" />
                    {item.username || item.text}
                  </div>
                </span>
                <a
                  key={item.id}
                  target="_blank"
                  href={
                    item.text.toLowerCase() === "whatsapp"
                      ? `${item.link}?phone=${textVariants.sections.contacts.contact.phone.raw}&text=${textVariants.sections.contacts.social.whatsapp_message[language]}`
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
      </div>

      <div className="flex [@media_(min-width:_800px)]:flex-row flex-col items-center gap-4 h-fit min-h-[50dvh]">
        <div className="flex md:flex-row flex-col [@media_(min-width:_800px)]:flex-col lg:flex-col justify-evenly items-center gap-6">
          <ContactCard
            cardTitle={
              textVariants.others.labels.contacts.contact.phone[language]
            }
            icon={<GiRotaryPhone />}
            tooltip={textVariants.sections.contacts.contact.phone.tooltip}
            language={language}
            link={`tel:${textVariants.sections.contacts.contact.phone.raw}`}
          >
            <p className="text-sm">
              {textVariants.sections.contacts.contact.phone.text}
            </p>
          </ContactCard>
          <ContactCard
            cardTitle={
              textVariants.others.labels.contacts.contact.email[language]
            }
            icon={<PiMailboxFill />}
            tooltip={textVariants.sections.contacts.contact.email.tooltip}
            language={language}
            link={`mailto:${textVariants.sections.contacts.contact.email.text}`}
          >
            <p className="text-sm">
              {textVariants.sections.contacts.contact.email.text}
            </p>
          </ContactCard>
          <ContactCard
            cardTitle={
              textVariants.others.labels.contacts.contact.location[language]
            }
            icon={<PiMapPinAreaFill />}
            tooltip={textVariants.sections.contacts.contact.location.tooltip}
            language={language}
            link={textVariants.sections.contacts.contact.location.url}
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex flex-col justify-center items-center gap-1 text-neutral-800 dark:text-neutral-300 text-sm">
                <p>
                  {
                    textVariants.sections.contacts.contact.location.city[
                      language
                    ]
                  }
                </p>
                <p>
                  {
                    textVariants.sections.contacts.contact.location.state[
                      language
                    ]
                  }
                </p>
                <p>
                  {
                    textVariants.sections.contacts.contact.location.country[
                      language
                    ]
                  }
                </p>
              </div>
            </div>
          </ContactCard>
        </div>
        <Separator
          orientation="vertical"
          className="hidden [@media_(min-width:_800px)]:inline-block bg-neutral-400 dark:bg-neutral-700 rounded-xl w-[1px] h-[50dvh]"
        />
        <Separator
          orientation="vertical"
          className="[@media_(min-width:_800px)]:hidden inline-block bg-neutral-400 dark:bg-neutral-700 rounded-xl w-[60vw] h-[1px]"
        />
        <ContactForm />
      </div>
      <Alert className="w-fit">
        <AlertTitle>
          {textVariants.sections.contacts.alert.google_form[language]}
        </AlertTitle>
      </Alert>
    </BgImageContainer>
  );
}

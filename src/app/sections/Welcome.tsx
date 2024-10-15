"use client";

import React, { useEffect } from "react";
import Title from "../components/common/Title";
import BgImageContainer from "../components/common/BgImageContainer";
import Header from "../components/unique/Header";
import { textVariants } from "@/utils/constants/textVariants";
import { useLanguageContext } from "@/utils/context/LanguageContext";
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import { toast } from "sonner";
import { Toaster as SonnerToaster } from "sonner";

export default function Welcome() {
  const { language } = useLanguageContext();

  const possibleReferrers = [
    { ref: "https://l.instagram.com/", name: "Instagram" },
    { ref: "https://www.linkedin.com/", name: "Linkedin" },
    { ref: "https://m.facebook.com/", name: "Facebook (Mobile)" },
    { ref: "https://www.facebook.com/", name: "Facebook (Desktop)" },
    { ref: "https://t.co/", name: "Twitter" },
    { ref: "https://wa.me/", name: "WhatsApp" },
    { ref: "https://m.me/", name: "Messenger" },
    { ref: "https://www.tiktok.com/", name: "TikTok" },
    { ref: "https://www.reddit.com/", name: "Reddit" },
    { ref: "https://story.snapchat.com/", name: "Snapchat" },
    { ref: "https://github.com/", name: "GitHub" },
    { ref: "https://vercel.live/", name: "Vercel" },
  ];

  useEffect(() => {
    const referrer = possibleReferrers.find(
      (item) =>
        item.ref.replace("www.", "") === document.referrer.replace("www.", ""),
    );

    if (referrer) {
      toast(
        <div className="relative flex h-fit w-full flex-col items-start gap-3 bg-yellow-200 p-4 text-sm md:text-base">
          <button
            className="absolute right-2 top-2 text-3xl text-yellow-900"
            onClick={() => {
              toast.dismiss();
            }}
          >
            <IoIosClose />
          </button>
          <div className="flex flex-wrap items-center gap-2 text-left font-bold text-yellow-900">
            {textVariants.sections.welcome.toast.title[language]}
            <p className="pr-4 font-normal text-yellow-700">
              {textVariants.sections.welcome.toast.subtitle[language]}{" "}
              <u>{referrer?.ref}</u>
            </p>
          </div>
          <p
            className="text-left text-xs md:text-sm"
            dangerouslySetInnerHTML={{
              __html: textVariants.sections.welcome.toast.description[
                language
              ].replace("[APP]", referrer?.name || " "),
            }}
          />
        </div>,
      );
    }
  }, []);

  return (
    <BgImageContainer
      darkImgSrc="/images/background/dark/welcome-bg-img.jpg"
      lightImgSrc="/images/background/light/welcome-bg-img.jpg"
      id="welcome"
    >
      <Title
        mainText={textVariants.sections.welcome.title.main[language]}
        bgText={textVariants.sections.welcome.title.bg[language]}
      />

      <div className="flex flex-col items-center justify-center md:mb-10 lg:gap-6">
        <h1 className="text-sm font-medium md:text-base">
          {textVariants.sections.welcome.subtitle[language]}
        </h1>
        <Header />
      </div>
      <IoIosArrowDown
        className="absolute bottom-20 animate-bounce text-4xl text-black hover:cursor-pointer dark:text-white"
        onClick={() =>
          document
            .getElementById("language")
            ?.scrollIntoView({ block: "start", behavior: "smooth" })
        }
      />
      <SonnerToaster
        duration={Infinity}
        toastOptions={{
          classNames: {
            toast: "w-[80vw] p-0 rounded-none",
          },
        }}
        position="bottom-left"
      />
    </BgImageContainer>
  );
}

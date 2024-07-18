"use client";

import React from "react";
import Title from "../components/common/Title";
import BgImageContainer from "../components/common/BgImageContainer";
import Header from "../components/unique/Header";
import { textVariants } from "@/utils/constants/textVariants";
import { useLanguageContext } from "@/utils/context/Language";
import { IoIosArrowDown } from "react-icons/io";

export default function Welcome() {
  const { language } = useLanguageContext();

  return (
    <BgImageContainer src="/images/background/welcome-bg-img.jpg" id="welcome">
      <Title
        mainText={textVariants.sections.welcome.title.main[language]}
        bgText={textVariants.sections.welcome.title.bg[language]}
      />

      <div className="flex flex-col justify-center items-center lg:gap-6 md:mb-10">
        <h1 className="font-medium text-sm md:text-base">
          {textVariants.sections.welcome.subtitle[language]}
        </h1>
        <Header />
      </div>
      <IoIosArrowDown
        className="bottom-12 absolute text-4xl animate-bounce hover:cursor-pointer"
        onClick={() =>
          document
            .getElementById("language")
            ?.scrollIntoView({ block: "start", behavior: "smooth" })
        }
      />
    </BgImageContainer>
  );
}

"use client";

import React from "react";
import BgImageContainer from "../components/common/BgImageContainer";
import Title from "../components/common/Title";
import { textVariants } from "@/utils/constants/textVariants";
import { useLanguageContext } from "@/utils/context/LanguageContext";
import LanguageSwitch from "../components/unique/LanguageSwitch";

export default function Language() {
  const { language } = useLanguageContext();

  return (
    <BgImageContainer
      darkImgSrc="/images/background/dark/language-bg-img.jpg"
      lightImgSrc="/images/background/light/language-bg-img.jpg"
      id="language"
    >
      <div className="top-0 left-0 absolute flex flex-col justify-center gap-4 md:gap-8 w-full h-full">
        <Title
          mainText={textVariants.sections.language.title.main[language]}
          bgText={textVariants.sections.language.title.bg[language]}
        />
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 mx-auto w-fit h-fit">
          <h2 className="font-semibold text-black dark:text-white">
            {textVariants.sections.language.subtitle[language]}
          </h2>
          <LanguageSwitch />
        </div>
      </div>
    </BgImageContainer>
  );
}

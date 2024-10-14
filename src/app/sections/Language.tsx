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
      slideAnimation="right"
    >
      <Title
        mainText={textVariants.sections.language.title.main[language]}
        bgText={textVariants.sections.language.title.bg[language]}
      />
      <h2 className="font-semibold text-black dark:text-white">
        {textVariants.sections.language.subtitle[language]}
      </h2>
      <LanguageSwitch />
    </BgImageContainer>
  );
}

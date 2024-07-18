"use client";

import React from "react";
import { stacks } from "@/utils/constants/stacks";
import InfiniteSlider from "../components/unique/InfiniteSlider";
import BgImageContainer from "../components/common/BgImageContainer";
import Title from "../components/common/Title";
import { useLanguageContext } from "@/utils/context/Language";
import { textVariants } from "@/utils/constants/textVariants";
import { LuDownload } from "react-icons/lu";
import Link from "../components/common/Link";

export default function About() {
  const { language } = useLanguageContext();
  return (
    <BgImageContainer id="about" src="/images/background/about-bg-img.jpg">
      <Title
        mainText={textVariants.sections.about.title.main[language]}
        bgText={textVariants.sections.about.title.bg[language]}
      />

      <div className="flex md:flex-row flex-col justify-evenly items-center gap-10 w-full">
        <img
          src="/images/avatar.jpg"
          alt="Avatar"
          className="border-4 border-white rounded-full w-1/2 md:w-1/4"
          loading="eager"
        />
        <div className="flex flex-col items-center gap-4">
          <div className="text-center text-sm md:text-left lg:text-base">
            {textVariants.sections.about.paragraph[language]}
          </div>
          <Link
            href="Currículo-Luis-Henrique-da-Cunha-Cavalcante.pdf"
            variant="primary"
            download
          >
            <p>{textVariants.sections.about.link[language]}</p>
            <LuDownload size={18} />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-semibold">
          {textVariants.sections.about.subtitle[language]}
        </p>
        <InfiniteSlider items={stacks} />
      </div>
    </BgImageContainer>
  );
}

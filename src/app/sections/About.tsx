"use client";

import React from "react";
import { stacks } from "@/utils/constants/stacks";
import InfiniteSlider from "../components/unique/InfiniteSlider";
import BgImageContainer from "../components/common/BgImageContainer";
import Title from "../components/common/Title";
import { useLanguageContext } from "@/utils/context/LanguageContext";
import { textVariants } from "@/utils/constants/textVariants";
import { LuDownload } from "react-icons/lu";
import Link from "../components/common/Link";
import AudioPlayer from "../components/unique/AudioPlayer";

export default function About() {
  const { language } = useLanguageContext();
  return (
    <BgImageContainer
      id="about"
      darkImgSrc="/images/background/dark/about-bg-img.jpg"
      lightImgSrc="/images/background/light/about-bg-img.jpg"
    >
      <Title
        mainText={textVariants.sections.about.title.main[language]}
        bgText={textVariants.sections.about.title.bg[language]}
      />

      <div className="flex md:flex-row flex-col justify-evenly items-center gap-10 w-full">
        <img
          src="/images/avatar.jpg"
          alt="Avatar"
          className="border-4 border-neutral-800 dark:border-white rounded-full w-1/2 md:w-1/4"
          loading="eager"
        />
        <div className="flex flex-col items-center gap-5">
          <div className="mx-auto w-[90%] text-center text-sm md:text-left lg:text-base">
            {textVariants.sections.about.paragraph[language]}
          </div>
          <div className="flex lg:flex-row flex-col-reverse justify-evenly items-center w-full">
            <Link
              href="curriculo-luis-henrique-da-cunha-cavalcante.pdf"
              variant="primary"
              download
            >
              <>{textVariants.sections.about.link[language]}</>
              <LuDownload size={18} />
            </Link>
            <AudioPlayer
              url={textVariants.sections.about.audio.url[language]}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-black dark:text-white">
        <p className="font-semibold">
          {textVariants.sections.about.subtitle[language]}
        </p>
        <InfiniteSlider items={stacks} />
      </div>
    </BgImageContainer>
  );
}

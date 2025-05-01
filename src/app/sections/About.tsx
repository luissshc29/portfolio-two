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
import { useTheme } from "next-themes";

export default function About() {
  const { language } = useLanguageContext();
  const { resolvedTheme } = useTheme();
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

      <div className="flex w-full flex-col items-center justify-evenly gap-10 lg:flex-row">
        <img
          src={`/images/avatar-${resolvedTheme}.png`}
          alt="Avatar"
          className="w-[57%] rounded-full border-4 border-neutral-200 dark:border-neutral-900 md:w-1/3"
          loading="eager"
        />
        <div className="flex flex-col items-center gap-5">
          <div className="mx-auto w-[90%] text-center text-sm md:text-left lg:text-base">
            {textVariants.sections.about.paragraph[language]}
          </div>
          <div className="flex w-full flex-col-reverse items-center justify-evenly lg:flex-row">
            <Link
              href={textVariants.sections.about.resume.url[language]}
              variant="primary"
              className="active:scale-[.90]"
              download
            >
              <>{textVariants.sections.about.resume.text[language]}</>
              <LuDownload size={18} />
            </Link>
            <AudioPlayer
              url={textVariants.sections.about.audio.url[language]}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-black dark:text-white">
        {/* <p className="font-semibold">
          {textVariants.sections.about.subtitle[language]}
        </p> */}
        <InfiniteSlider items={stacks} />
      </div>
    </BgImageContainer>
  );
}

"use client";

import React from "react";
import { stacks } from "@/utils/constants/stacks";
import InfiniteSlider from "../components/unique/InfiniteSlider";
import BgImageContainer from "../components/common/BgImageContainer";
import Title from "../components/common/Title";
import { useLanguageContext } from "@/utils/context/LanguageContext";
import { textVariants } from "@/utils/constants/textVariants";
import Link from "../components/common/Link";
import AudioPlayer from "../components/unique/AudioPlayer";
import { useTheme } from "next-themes";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoMdArrowDown } from "react-icons/io";

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
          // src={`/images/avatar-bw.jpg`}
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
              href={textVariants.sections.about.resume.document_url[language]}
              variant="primary"
              className="resume-download-button my-0 flex h-10 w-40 items-center justify-center overflow-hidden p-0 active:shadow-[inset_0_2px_4px_0_rgb(0_0_0_/_0.2)] active:dark:shadow-black md:my-0 md:h-10 md:w-40 md:p-0"
              download
            >
              <div className="resume-download-button-primary-container flex w-fit items-center gap-2">
                <>
                  {
                    textVariants.sections.about.resume.button.text.primary[
                      language
                    ]
                  }
                </>
                <IoDocumentTextOutline className="text-xl" />
              </div>

              <div className="resume-download-button-secondary-container flex w-fit items-center gap-2">
                <>
                  {
                    textVariants.sections.about.resume.button.text.secondary[
                      language
                    ]
                  }
                </>
                <IoMdArrowDown className="text-xl" />
              </div>
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

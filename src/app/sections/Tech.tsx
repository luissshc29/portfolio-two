"use client";

import React, { useEffect, useState } from "react";
import BgImageContainer from "../components/common/BgImageContainer";
import Title from "../components/common/Title";
import { textVariants } from "@/utils/constants/textVariants";
import { useLanguageContext } from "@/utils/context/LanguageContext";
import { stacks } from "@/utils/constants/stacks";
import { useTheme } from "next-themes";
import TechCard from "../components/common/card/TechCard";

export default function Tech() {
  const { language } = useLanguageContext();
  const { resolvedTheme } = useTheme();
  const [isUserDeviceTouchscreen, setIsUserDeviceTouchscreen] =
    useState<boolean>(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const isMouseDevice = window.matchMedia("(hover: hover)").matches;

    if (isTouchDevice) setIsUserDeviceTouchscreen(true);
    if (isMouseDevice) setIsUserDeviceTouchscreen(false);
  }, []);

  return (
    <BgImageContainer
      id="tech"
      darkImgSrc="/images/background/dark/tech-bg-img.jpg"
      lightImgSrc="/images/background/light/tech-bg-img.jpg"
    >
      <Title
        mainText={textVariants.sections.tech.title.main[language]}
        bgText={textVariants.sections.tech.title.bg[language]}
      />
      <p className="flex w-fit items-center gap-2 text-left text-sm md:text-base">
        {
          textVariants.sections.tech.subtitle[
            isUserDeviceTouchscreen ? "touch" : "hover"
          ][language]
        }
      </p>
      <div className="grid w-full grid-cols-3 items-center justify-evenly justify-items-center gap-5 md:grid-cols-5 lg:grid-cols-7 [@media_(min-width:500px)_and_(max-width:639px)]:grid-cols-4 [@media_(min-width:800px)_and_(max-width:1023px)]:grid-cols-6">
        {stacks.map((s) => (
          <TechCard
            tech={s}
            theme={resolvedTheme as "light" | "dark"}
            language={language}
            key={s.id}
            isUserDeviceTouchscreen={isUserDeviceTouchscreen}
          />
        ))}
      </div>
    </BgImageContainer>
  );
}

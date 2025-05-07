"use client";

import React, { useEffect, useState } from "react";
import BgImageContainer from "../components/common/BgImageContainer";
import Title from "../components/common/Title";
import { textVariants } from "@/utils/constants/textVariants";
import { useLanguageContext } from "@/utils/context/LanguageContext";
import { stacks } from "@/utils/constants/stacks";
import { useTheme } from "next-themes";
import TechCard from "../components/common/card/TechCard";
import { useInView } from "react-intersection-observer";

export default function Tech() {
  const { language } = useLanguageContext();
  const { resolvedTheme } = useTheme();
  const [isUserDeviceTouchscreen, setIsUserDeviceTouchscreen] =
    useState<boolean>(false);
  const { ref, inView } = useInView();

  function getDeviceInfo() {
    // Checking if the device is an Android, iOS or Desktop
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;
    const isMobileUserAgent = /Mobi|Android|iPhone|iPad|iPod|Mobile/i.test(
      userAgent,
    );
    const isAndroid = /Android/i.test(userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);

    // Checking if the user is using a mouse or a touch screen
    const isTouchByMedia = window.matchMedia("(pointer: coarse)").matches;
    const isTouchFallback =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const isTouch = isTouchByMedia || isTouchFallback;

    if (isMobileUserAgent || isAndroid || isIOS)
      setIsUserDeviceTouchscreen(true);
    if (isTouch) setIsUserDeviceTouchscreen(true);
  }

  useEffect(() => {
    getDeviceInfo();
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
      <div
        className="grid w-full grid-cols-3 items-center justify-evenly justify-items-center gap-5 md:grid-cols-5 lg:grid-cols-7 [@media_(min-width:500px)_and_(max-width:639px)]:grid-cols-4 [@media_(min-width:800px)_and_(max-width:1023px)]:grid-cols-6"
        ref={ref}
      >
        {inView
          ? stacks.map((s, index) => (
              <React.Fragment key={`${s.id}-${index}`}>
                <TechCard
                  tech={s}
                  theme={resolvedTheme as "light" | "dark"}
                  language={language}
                  isUserDeviceTouchscreen={isUserDeviceTouchscreen}
                  style={{
                    animationDelay: `${100 * index}ms`,
                  }}
                />
              </React.Fragment>
            ))
          : stacks.map((s, index) => (
              <div className="opacity-0" key={`${s.id}-${index}`}>
                <TechCard
                  tech={s}
                  theme={resolvedTheme as "light" | "dark"}
                  language={language}
                  isUserDeviceTouchscreen={isUserDeviceTouchscreen}
                  style={{
                    animationDelay: `${100 * index}ms`,
                  }}
                />
              </div>
            ))}
      </div>
    </BgImageContainer>
  );
}

"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "usehooks-ts";

interface BgImageContainerProps {
  darkImgSrc?: string;
  lightImgSrc?: string;
  slideAnimation?: boolean;
}

export default function BgImageContainer({
  children,
  darkImgSrc = "",
  lightImgSrc = "",
  id,
  className = "",
  slideAnimation = true,
  ...rest
}: {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> &
  BgImageContainerProps) {
  const isMdScreen = useMediaQuery("(min-width: 640px)");
  const { ref, inView } = useInView({
    threshold:
      id !== "projects" && id !== "experience"
        ? isMdScreen
          ? 0.35
          : 0.2
        : 0.05,
  });
  useEffect(() => {
    if (inView && window && id) {
      window.history.pushState(null, "", `#${id}`);
    }
  }, [inView]);

  // Checking if there's already a hash on the url and scrolling to it
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && hash === id) {
      window.location.hash = hash;
    }
  }, []);

  return (
    <div
      className={`relative min-h-screen w-screen overflow-x-clip ${className}`}
      {...rest}
      ref={ref}
      id={id && id}
    >
      {darkImgSrc && (
        <Image
          fill
          src={darkImgSrc}
          className="hidden dark:block z-[-10] absolute w-full min-w-[1024px] h-full"
          alt="Background image"
        />
      )}
      {lightImgSrc && (
        <Image
          fill
          src={lightImgSrc}
          className="dark:hidden block z-[-10] absolute w-full min-w-[1024px] h-full"
          alt="Background image"
        />
      )}

      <div className="z-[-9] absolute bg-white dark:bg-black bg-opacity-[.94] dark:bg-opacity-[.92] w-screen h-full min-h-screen" />
      <div
        className={
          `flex min-h-screen w-full flex-col items-center justify-center gap-8 p-8 text-center transition-all duration-1000 md:gap-16 md:p-10` /* + ${ id !== "welcome" && "animate-up opacity-0 [animation-range:entry_0%_cover_50%] [animation-timeline:view()]" } */
        }
        style={
          // Conditional to fix Header desapearing on scroll
          id !== "welcome"
            ? slideAnimation
              ? inView
                ? { transform: `translateY(0)`, opacity: "1" }
                : {
                    transform: `translateY(6%)`,
                    opacity: "0",
                  }
              : {}
            : {}
        }
      >
        {children}
      </div>
    </div>
  );
}

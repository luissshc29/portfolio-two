"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface BgImageContainerProps {
  darkImgSrc: string;
  lightImgSrc: string;
}

export default function BgImageContainer({
  children,
  darkImgSrc,
  lightImgSrc,
  id,
  ...rest
}: {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> &
  BgImageContainerProps) {
  const { ref, inView } = useInView({
    threshold: id !== "projects" ? 0.3 : 0.1,
  });
  useEffect(() => {
    if (inView) {
      if (window) window.history.pushState(null, "", `#${id}`);
    }
  }, [inView]);

  // Checking if there's already a hash on the url and scrolling to it
  useEffect(() => {
    if (window) {
      const hash = window.location.hash.substring(1);
      if (hash) {
        window.location.hash = hash;
      }
    }
  }, []);

  return (
    <div
      className={`relative min-h-[120vh] w-screen overflow-clip md:min-h-[110vh]`}
      {...rest}
      ref={ref}
      id={id}
    >
      <img
        src={darkImgSrc}
        className="absolute z-[-10] hidden h-full w-full min-w-[1024px] dark:block"
        alt="Background image"
      />
      <img
        src={lightImgSrc}
        className="absolute z-[-10] block h-full w-full min-w-[1024px] dark:hidden"
        alt="Background image"
      />
      <div className="absolute z-[-9] h-full min-h-screen w-screen bg-white bg-opacity-[.94] dark:bg-black dark:bg-opacity-[.92]" />
      <div
        className={`relative flex min-h-[120vh] w-full flex-col items-center justify-center gap-8 p-8 text-center transition-all duration-1000 md:gap-16 md:p-10`}
        style={
          // Conditional to fix Header desapearing on scroll
          id !== "welcome"
            ? inView
              ? { opacity: "100%" }
              : { opacity: "0%" }
            : {}
        }
      >
        {children}
      </div>
    </div>
  );
}

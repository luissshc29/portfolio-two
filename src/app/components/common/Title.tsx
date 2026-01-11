"use client";

import { useLanguageContext } from "@/utils/context/LanguageContext";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Title({
  variant = "text-only",
  bgIcon = "",
  mainText,
  bgText = "",
}: {
  variant?: "text-only" | "with-bg-icon";
  bgIcon?: React.ReactNode;
  mainText: string;
  bgText?: string;
}) {
  // Avoiding wrong typing
  const textIndex = useRef(0);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [title, setTitle] = useState("");

  const { language } = useLanguageContext();

  function typing() {
    if (textIndex.current < mainText.length) {
      const nextChar = mainText.charAt(textIndex.current);
      setTitle((previous) => previous + nextChar);
      textIndex.current += 1;
      typingTimeoutRef.current = setTimeout(() => typing(), 100);
    }
  }

  const { ref, inView } = useInView();

  useEffect(() => {
    if (variant === "text-only") {
      setTitle("");
      textIndex.current = 0;
      if (inView) {
        typing();
      }
    }
  }, [inView, language]);

  if (variant === "text-only") {
    return (
      <div
        className="relative flex justify-center items-center w-full text-center"
        ref={ref}
      >
        <h1 className="top-0 z-[-2] absolute opacity-20 font-title-bg text-[#838383] dark:text-[#9b9b9b] text-5xl md:text-7xl">
          {bgText}
        </h1>
        <h2 className="font-title text-4xl md:text-5xl text">{title}</h2>
        <span className="text-4xl md:text-5xl animate-blink">_</span>
      </div>
    );
  } else {
    return (
      <div className="relative flex justify-center items-center text-center">
        <h1 className="-top-[30px] md:-top-[36px] z-[-2] absolute mx-auto font-title-bg text-[#adadad] dark:text-[#363636] text-3xl md:text-4xl">
          {bgIcon}
        </h1>
        <h2 className="font-title text-base md:text-lg">{mainText}</h2>
      </div>
    );
  }
}

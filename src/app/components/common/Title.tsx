"use client";

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

  function typing() {
    if (textIndex.current < mainText.length) {
      const nextChar = mainText.charAt(textIndex.current);
      setTitle((previous) => previous + nextChar);
      textIndex.current += 1;
      typingTimeoutRef.current = setTimeout(() => typing(), 100);
    }
  }

  const [title, setTitle] = useState("");

  const { ref, inView } = useInView();

  useEffect(() => {
    if (variant === "text-only") {
      setTitle("");
      textIndex.current = 0;
      if (inView) {
        typing();
      }
    }
  }, [mainText, inView]);

  if (variant === "text-only") {
    return (
      <div
        className="relative flex w-full items-center justify-center text-center"
        ref={ref}
      >
        <h1 className="absolute top-0 z-[-2] font-title-bg text-5xl text-[#838383] opacity-20 dark:text-[#9b9b9b] md:text-7xl">
          {bgText}
        </h1>
        <h2 className="font-title text-4xl md:text-5xl">{title}</h2>
        <span className="animate-blink text-4xl md:text-5xl">_</span>
      </div>
    );
  } else {
    return (
      <div className="relative flex items-center justify-center text-center">
        <h1 className="absolute top-[-100%] z-[-2] mx-auto font-title-bg text-3xl text-[#adadad] dark:text-[#363636] md:text-4xl">
          {bgIcon}
        </h1>
        <h2 className="font-title text-base md:text-lg">{mainText}</h2>
      </div>
    );
  }
}

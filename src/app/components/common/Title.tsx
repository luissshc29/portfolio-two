"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Title({
  variant = 'text-only',
  bgIcon = '',
  mainText,
  bgText = "",
}: {
  variant?: 'text-only' | 'with-bg-icon'
  bgIcon?: React.ReactNode
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
    if (variant === 'text-only') {
      setTitle("");
      textIndex.current = 0;
      if (inView) {
        typing();
      }
    }

  }, [mainText, inView]);

  if (variant === 'text-only') {
    return (
      <div
        className="relative flex justify-center items-center w-full text-center"
        ref={ref}
      >
        <h1 className="top-0 z-[-2] absolute opacity-20 font-title-bg text-[#838383] text-5xl md:text-7xl dark:text-[#9b9b9b]">
          {bgText}
        </h1>
        <h2 className="font-title text-4xl md:text-5xl">{title}</h2>
        <span className="animate-blink">_</span>
      </div>
    );
  } else {
    return (
      <div
        className="relative flex justify-center items-center text-center"
      >
        <h1 className="mx-auto top-[-100%] z-[-2] absolute opacity-20 font-title-bg text-[#1a1a1a] text-3xl md:text-4xl dark:text-[#ececec]">
          {bgIcon}
        </h1>
        <h2 className="font-title text-base md:text-lg">{mainText}</h2>
      </div>
    );
  }


}

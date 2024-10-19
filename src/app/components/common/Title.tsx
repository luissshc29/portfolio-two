"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Title({
  mainText,
  bgText = "",
}: {
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
    setTitle("");
    textIndex.current = 0;
    if (inView) {
      typing();
    }
  }, [mainText, inView]);

  return (
    <div
      className="relative flex justify-center items-center w-full font-font-medium font-title text-4xl text-center md:text-5xl"
      ref={ref}
    >
      <h1 className="top-0 z-[-2] absolute opacity-20 font-title-bg text-[#838383] text-5xl md:text-7xl dark:text-[#9b9b9b]">
        {bgText}
      </h1>
      <h2>{title}</h2>
      <span className="animate-blink">_</span>
    </div>
  );
}

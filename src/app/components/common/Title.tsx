"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Title({
  mainText,
  bgText = "",
}: {
  mainText: string;
  bgText?: string;
}) {

  let i = 0;
  function typing() {
    if (i < mainText.length) {
      setTitle((previous) => (previous += mainText.charAt(i)));
      setTimeout(() => {
        i++;
        typing();
      }, 100);
    }
  }

  const [title, setTitle] = useState("");

  const { ref, inView } = useInView();

  useEffect(() => {
    setTitle("");
    if (inView) {
      typing();
    }
  }, [mainText, inView]);

  return (
    <div
      className="relative flex w-full items-center justify-center text-center font-font-medium font-title text-4xl md:text-5xl"
      ref={ref}
    >
      <h1 className="absolute z-[-2] text-5xl text-[#838383] opacity-20 dark:text-[#9b9b9b] top-0  md:text-7xl font-title-bg">
        {bgText}
      </h1>
      <h2>{title}</h2>
      <span className="animate-blink">_</span>
    </div>
  );
}

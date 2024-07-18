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
      className="relative flex w-full items-center justify-center text-center font-title text-2xl font-bold text-white md:text-4xl"
      ref={ref}
    >
      <h1 className="absolute z-[-2] text-5xl text-[#8d8d8d] opacity-20 md:text-7xl">
        {bgText}
      </h1>
      <h2>{title}</h2>
      <span className="animate-blink">_</span>
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    setTitle("");
    typing();
  }, [mainText]);

  return (
    <div className="relative flex justify-center items-center w-full font-bold font-title text-2xl text-center text-white md:text-4xl">
      <h1 className="z-[-2] absolute opacity-20 text-5xl text-neutral-500 md:text-7xl">
        {bgText}
      </h1>
      <h2>{title}</h2>
      <span className="animate-blink">_</span>
    </div>
  );
}

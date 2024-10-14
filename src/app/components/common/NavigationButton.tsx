"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

interface NavigationButtonProps {
  navigateTo?: string;
}

export default function NavigationButton({
  children,
  navigateTo = "",
  className = "",
  ...rest
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  NavigationButtonProps) {
  const [element, setElement] = useState<HTMLElement>();

  useEffect(() => {
    setElement(document.getElementById(navigateTo) as HTMLElement);
  }, []);

  return (
    <button
      className={`button relative z-[101] m-0 flex h-fit scale-[.85] items-center gap-1 border-none pb-2 text-base text-black after:[border-color:black] dark:text-white dark:after:[border-color:white] dark:font-normal font-bold ${className}`}
      onClick={() => {
        element?.scrollIntoView({ block: "start", behavior: "smooth" });
        if (window) window.history.pushState(null, "", `#${navigateTo}`);
      }}
      {...rest}
    >
      {children}
      <AiOutlineArrowRight className="text-xl transition-transform duration-300" />
    </button>
  );
}

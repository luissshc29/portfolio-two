"use client";

import React, { useEffect } from "react";
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
  var element = document.getElementById(navigateTo);

  useEffect(() => {
    element = document.getElementById(navigateTo);
  }, []);

  return (
    <button
      className={`button relative z-[101] m-0 flex h-fit scale-[.85] items-center gap-1 border-none pb-2 text-sm font-medium outline-none md:text-base ${className}`}
      onClick={() => {
        element?.scrollIntoView({ block: "start", behavior: "smooth" });
      }}
      {...rest}
    >
      {children}
      <AiOutlineArrowRight className="text-xl transition-transform duration-300" />
    </button>
  );
}

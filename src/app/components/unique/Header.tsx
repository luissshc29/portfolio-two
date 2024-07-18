"use client";

import React, { useEffect, useState } from "react";
import { textVariants } from "@/utils/constants/textVariants";
import { useLanguageContext } from "@/utils/context/Language";
import { BsChevronExpand } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shadcn/components/ui/dropdown-menu";
import NavigationButton from "../common/NavigationButton";

export default function Header() {
  const { language } = useLanguageContext();

  const [header, setHeader] = useState<HTMLElement>();
  const [headerYPosition, setHeaderYPosition] = useState<number>(345);

  const [style, setStyle] = useState<React.CSSProperties | undefined>(
    undefined,
  );

  function handleStyleOnPageScroll() {
    if (window.scrollY > headerYPosition) {
      setStyle({
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#000",
        padding: "0em 2em",
      });
    } else {
      setStyle(undefined);
    }
  }

  useEffect(() => {
    setHeader(document.getElementById("header") as HTMLElement);
    if (header) {
      setHeaderYPosition(header.offsetTop);
    }
    window.addEventListener("scroll", () => {
      handleStyleOnPageScroll();
    });
  }, []);

  return (
    <div
      className="z-[999] flex h-[7vh] w-full flex-wrap-reverse items-center justify-around gap-4 duration-300 md:h-[10vh]"
      id="header"
      style={style}
    >
      <img
        src="/images/logo/logo-white-text-full.png"
        className="w-[40%] hover:cursor-pointer md:w-1/4 lg:w-1/5"
        style={
          style
            ? { display: "block", transition: "300ms" }
            : { display: "none", transition: "300ms" }
        }
        alt="White logo full"
        onClick={() =>
          document
            .getElementById("welcome")
            ?.scrollIntoView({ block: "start", behavior: "smooth" })
        }
      />

      <div className="hidden flex-wrap items-center justify-center text-sm md:gap-4 md:text-base lg:flex">
        {textVariants.others.header.options.map((option) => (
          <NavigationButton navigateTo={option.navigateTo} key={option.id}>
            {option.text[language]}
          </NavigationButton>
        ))}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="text-xl lg:hidden">
          <BsChevronExpand />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {textVariants.others.header.options.map((option) => (
            <DropdownMenuItem key={option.id}>
              <NavigationButton navigateTo={option.navigateTo}>
                {option.text[language]}
              </NavigationButton>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

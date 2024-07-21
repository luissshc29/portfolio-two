"use client";

import React, { useEffect, useState } from "react";
import { textVariants } from "@/utils/constants/textVariants";
import { useLanguageContext } from "@/utils/context/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shadcn/components/ui/dropdown-menu";
import NavigationButton from "../common/NavigationButton";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdMenu } from "react-icons/io";
import { useHeaderContext } from "@/utils/context/HeaderContext";
import { useTheme } from "next-themes";

export default function Header() {
  const { language } = useLanguageContext();

  const { headerVisible } = useHeaderContext();

  const [header, setHeader] = useState<HTMLElement>();
  const [headerYPosition, setHeaderYPosition] = useState<number>(345);

  const [style, setStyle] = useState<React.CSSProperties | undefined>(
    undefined,
  );

  const { resolvedTheme } = useTheme();

  function handleStyleOnPageScroll() {
    if (window.scrollY > headerYPosition) {
      resolvedTheme === "light"
        ? setStyle({
            position: "fixed",
            top: 0,
            left: 0,
            backgroundColor: "#fff",
            padding: "0em 2em",
          })
        : setStyle({
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
    handleStyleOnPageScroll();
    if (header) {
      setHeaderYPosition(header.offsetTop);
    }
    window?.addEventListener("scroll", () => {
      handleStyleOnPageScroll();
    });
  }, [resolvedTheme]);

  if (headerVisible) {
    return (
      <div
        className="z-[999] flex h-[8vh] w-full flex-wrap-reverse items-center justify-around gap-4 py-1 duration-300 md:h-[10vh]"
        id="header"
        style={style}
      >
        <img
          src="/images/logo/logo-white-full.png"
          className="hidden w-[45%] hover:cursor-pointer dark:inline-block md:w-1/4 lg:w-1/5"
          style={
            style && resolvedTheme === "dark"
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

        <img
          src="/images/logo/logo-black-full.png"
          className="inline-block w-[45%] hover:cursor-pointer dark:hidden md:w-1/4 lg:w-1/5"
          style={
            style && resolvedTheme === "light"
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
          <DropdownMenuTrigger className="rounded-full border-[1px] border-black p-[3px] text-base text-black dark:border-white dark:text-white lg:hidden">
            {style ? <IoMdMenu /> : <HiMagnifyingGlass />}
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
}

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
import { useInView } from "react-intersection-observer";

export default function Header() {
  const { language } = useLanguageContext();

  const { headerVisible } = useHeaderContext();

  const [header, setHeader] = useState<HTMLElement>();
  const [headerYPosition, setHeaderYPosition] = useState<number>(345);

  const [style, setStyle] = useState<React.CSSProperties | undefined>(
    undefined,
  );

  const { resolvedTheme } = useTheme();
  const { ref, inView } = useInView();

  function handleStyleOnPageScroll() {
    if (window.scrollY > headerYPosition) {
        setStyle({
            position: "fixed",
            top: 0,
            left: 0,
            padding: "0em 2em",
          })
      if (!inView) {
        setStyle((prev) => ({
          ...prev,
          opacity: "100%",
        }));
      }
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
  }, [resolvedTheme, inView]);

  if (headerVisible) {
    return (
      <div
        className={`z-[999] relative flex h-[9vh] w-full flex-wrap-reverse items-center justify-around gap-4 py-1 duration-300 md:h-[10vh] before:absolute before:left-0 before:top-0 before:z-[51] before:h-[9vh] before:w-full before:bg-white before:dark:bg-black before:bg-opacity-70 dark:before:bg-opacity-70 before:backdrop-blur-md before:[-webkit-backdrop-filter:blur(12px)]`}
        id="header"
        style={style}
      >
        <img
          src="/images/logo/logo-white-full.png"
          className="hidden w-[45%] hover:cursor-pointer dark:inline-block md:w-1/4 lg:w-1/5 z-[999] "
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
          className="inline-block w-[45%] hover:cursor-pointer dark:hidden md:w-1/4 lg:w-1/5 z-[999] "
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
          <DropdownMenuTrigger className="rounded-full border-[1px] border-black p-[3px] text-xl text-black dark:border-white dark:text-white lg:hidden z-[999]">
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

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
import { Progress } from "@/shadcn/components/ui/progress";

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

  const [maxScrollPosition, setMaxScrollPosition] = useState<number>(0);

  function handleStyleOnPageScroll() {
    if (window.scrollY > headerYPosition) {
      setStyle({
        position: "fixed",
        top: 0,
        left: 0,
        padding: "0em 2em",
      });
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

  useEffect(() => {
    setMaxScrollPosition(
      document.documentElement.scrollHeight - window.innerHeight,
    );
  }, [document.documentElement.scrollHeight]);

  if (headerVisible) {
    return (
      <div
        className={`relative z-[999] flex h-[9vh] w-full flex-wrap-reverse items-center justify-around gap-4 py-1 duration-300 before:absolute before:left-0 before:top-0 before:z-[51] before:h-[9vh] before:w-full md:h-[11vh] before:md:h-[11vh] lg:h-[9vh] before:lg:h-[9vh] ${style ? "before:bg-white before:bg-opacity-80 before:backdrop-blur-md before:[-webkit-backdrop-filter:blur(12px)] before:dark:bg-black dark:before:bg-opacity-70" : "bg-transparent"}`}
        id="header"
        style={style}
        ref={ref}
      >
        <img
          src="/images/logo/logo-white-full.png"
          className="z-[999] hidden w-[45%] hover:cursor-pointer dark:inline-block md:w-1/4 lg:w-1/5"
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
          className="z-[999] inline-block w-[45%] hover:cursor-pointer dark:hidden md:w-1/4 lg:w-1/5"
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
          <DropdownMenuTrigger className="z-[999] rounded-full border-[1px] border-black bg-transparent p-[3px] text-xl text-black dark:border-white dark:text-white lg:hidden">
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
        {style && (
          <Progress
            value={(window.scrollY / maxScrollPosition) * 100}
            className="absolute bottom-0 z-[1000] h-[2px] w-screen"
          />
        )}
      </div>
    );
  }
}

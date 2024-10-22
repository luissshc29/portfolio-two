"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shadcn/components/ui/dropdown-menu";
import { Separator } from "@/shadcn/components/ui/separator";
import { textVariants } from "@/utils/constants/textVariants";
import { useHeaderContext } from "@/utils/context/HeaderContext";
import { useLanguageContext } from "@/utils/context/LanguageContext";
import { useTheme } from "next-themes";
import React, { Fragment, useEffect, useState } from "react";
import { MdCheckCircle, MdOutlineQuestionMark } from "react-icons/md";

export default function ThemeSelector() {
  const { language } = useLanguageContext();
  const { theme, setTheme } = useTheme();
  const { headerVisible } = useHeaderContext();

  const [selectorOpen, setSelectorOpen] = useState<boolean>(false);

  useEffect(() => {
    document.getElementById("theme-selector")?.focus();
  }, [selectorOpen]);

  if (headerVisible) {
    return (
      <DropdownMenu onOpenChange={() => setSelectorOpen(!selectorOpen)}>
        <DropdownMenuTrigger className="right-4 bottom-4 z-[1001] fixed border-[1px] dark:border-white bg-white dark:bg-black dark:shadow-black p-[2px] md:p-[3px] border-black rounded-sm text-black text-xl md:text-[22px] dark:text-white hover:cursor-pointer scale-[1.2]">
          {textVariants.others.themeSelector.options.find(
            (item) => item.text.us.toLowerCase() === theme,
          )?.icon || <MdOutlineQuestionMark />}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="flex flex-col justify-evenly items-start w-[45vw] md:w-[25vw] lg:w-[15vw] h-fit min-h-[20vh]"
          id="theme-selector"
        >
          {textVariants.others.themeSelector.options.map((option) => (
            <Fragment key={option.id}>
              <DropdownMenuItem
                className="z-[1001] flex justify-between items-center gap-2 hover:bg-neutral-400 dark:hover:bg-neutral-700 w-full hover:cursor-pointer"
                onClick={() => setTheme(option.text.us.toLowerCase())}
              >
                <>
                  <div className="flex items-center gap-2">
                    <div className="text-base md:text-lg">{option.icon}</div>
                    <p className="text-sm lg:text-base">
                      {option.text[language]}
                    </p>
                  </div>
                  <span
                    className="opacity-0 text-[#007bff] transition-all duration-500"
                    style={
                      theme === option.text.us.toLowerCase()
                        ? { opacity: 1 }
                        : {}
                    }
                  >
                    <div className="relative p-0 h-fit w-fit flex justify-center items-center">
                      <MdCheckCircle className="text-base md:text-xl z-[1002]" />
                      <div className="absolute h-[10px] w-[10px] md:h-[14px] md:w-[14px] bg-white rounded-full z-[1000]"></div>
                    </div>
                  </span>
                </>
              </DropdownMenuItem>
              {option.id !==
                textVariants.others.themeSelector.options.length ? (
                <Separator className="z-[1001] bg-neutral-500 dark:bg-neutral-700 mx-auto w-[95%]" />
              ) : (
                ""
              )}
            </Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}

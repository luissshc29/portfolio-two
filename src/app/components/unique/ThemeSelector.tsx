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
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdOutlineQuestionMark } from "react-icons/md";

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
        <DropdownMenuTrigger className="right-4 bottom-4 z-[1000] fixed border-[1px] dark:border-white bg-white dark:bg-black dark:shadow-black p-[2px] md:p-[3px] border-black rounded-sm text-black text-xl md:text-[22px] dark:text-white hover:cursor-pointer scale-[1.2]">
          {textVariants.others.themeSelector.options.find(
            (item) => item.text.us.toLowerCase() === theme,
          )?.icon || <MdOutlineQuestionMark />}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="flex flex-col justify-between w-[45vw] md:w-[20vw] min-h-[20vh]"
          id="theme-selector"
        >
          {textVariants.others.themeSelector.options.map((option) => (
            <Fragment key={option.id}>
              <DropdownMenuItem
                className="z-[1001] flex items-center gap-2 hover:bg-neutral-400 dark:hover:bg-neutral-700 hover:cursor-pointer"
                onClick={() => setTheme(option.text.us.toLowerCase())}
              >
                <>
                  <div className="text-base md:text-xl">{option.icon}</div>
                  <p className="text-sm lg:text-base">
                    {option.text[language]}
                  </p>
                  {theme === option.text.us.toLowerCase() && (
                    <span className="text-[#00c217] dark:text-[#00ff1e]">
                      <IoMdCheckmarkCircle className="text-base md:text-lg" />
                    </span>
                  )}
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

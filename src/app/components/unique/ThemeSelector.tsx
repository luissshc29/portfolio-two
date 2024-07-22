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
import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";

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
        <DropdownMenuTrigger className="fixed bottom-4 right-4 z-[1000] scale-[1.2] rounded-sm border-[1px] border-black bg-white p-[2px] text-xl text-black hover:cursor-pointer dark:border-white dark:bg-black dark:text-white dark:shadow-black md:p-[3px] md:text-[22px]">
          {
            textVariants.others.themeSelector.options.find(
              (item) => item.text.us.toLowerCase() === theme,
            )?.icon
          }
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="flex min-h-[20vh] w-[45vw] flex-col justify-evenly md:w-[15vw]"
          id="theme-selector"
        >
          {textVariants.others.themeSelector.options.map((option) => (
            <>
              <DropdownMenuItem
                key={option.id}
                className="flex items-center gap-2 hover:cursor-pointer hover:bg-neutral-400 dark:hover:bg-neutral-700"
                onClick={() => setTheme(option.text.us.toLowerCase())}
              >
                <>
                  <div className="text-base md:text-xl">{option.icon}</div>
                  <p className="text-sm md:text-base">
                    {option.text[language]}
                  </p>
                  {theme === option.text.us.toLowerCase() && (
                    <IoMdCheckmarkCircle className="text-base md:text-lg" />
                  )}
                </>
              </DropdownMenuItem>
              {option.id !==
              textVariants.others.themeSelector.options.length ? (
                <Separator className="z-[1001] mx-auto w-[95%] bg-neutral-400 dark:bg-neutral-700" />
              ) : (
                ""
              )}
            </>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}

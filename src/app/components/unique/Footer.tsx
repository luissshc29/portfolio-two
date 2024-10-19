"use client";

import React from "react";
import Link from "../common/Link";
import { Separator } from "@/shadcn/components/ui/separator";
import { stacks } from "@/utils/constants/stacks";
import { useLanguageContext } from "@/utils/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguageContext();

  return (
    <footer className="z-[1000] flex md:flex-row flex-col-reverse justify-evenly items-center gap-3 mx-auto mb-4 w-screen text-neutral-700 text-xs md:text-sm dark:text-neutral-400">
      <div className="flex items-center gap-2 opacity-70 md:opacity-60 md:dark:opacity-40 dark:opacity-70 w-fit text-neutral-600 dark:text-neutral-200">
        <p>{language === "br" ? "Feito com" : "Made with"}</p>
        <Separator
          orientation="vertical"
          className="bg-neutral-600 dark:bg-neutral-200 opacity-100 w-[1px] h-5"
        />
        <div className="flex items-center gap-2">
          {stacks
            .filter((item) => [4, 6, 10].includes(item.id))
            .map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                title={s.name}
                className="text-base"
              >
                {s.component}
              </a>
            ))}
        </div>
      </div>
      <div className="flex items-center gap-1">
        <p>Copyright &copy; 2024 </p>
        <Link href="/" variant="tertiary" target="#">
          Luis Henrique C. Cavalcante
        </Link>
      </div>
    </footer>
  );
}

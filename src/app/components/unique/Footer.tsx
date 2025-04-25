"use client";

import React from "react";
import Link from "../common/Link";
import { Separator } from "@/shadcn/components/ui/separator";
import { stacks } from "@/utils/constants/stacks";
import { useLanguageContext } from "@/utils/context/LanguageContext";
import { useTheme } from "next-themes";

export default function Footer() {
  const { language } = useLanguageContext();
  const { resolvedTheme } = useTheme();

  return (
    <footer className="z-[1000] mx-auto mb-4 flex w-screen flex-col-reverse items-center justify-evenly gap-3 text-xs text-neutral-700 dark:text-neutral-400 md:flex-row md:text-sm">
      <div className="flex w-fit items-center gap-2 text-neutral-600 opacity-70 dark:text-neutral-200 dark:opacity-70 md:opacity-60 md:dark:opacity-40">
        <p>{language === "br" ? "Feito com" : "Made with"}</p>
        <Separator
          orientation="vertical"
          className="h-5 w-[1px] bg-neutral-600 opacity-100 dark:bg-neutral-200"
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
                style={{ color: s.color[resolvedTheme as "light" | "dark"] }}
              >
                <s.component />
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

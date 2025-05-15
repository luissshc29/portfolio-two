"use client";

import React from "react";
import Title from "../Title";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/shadcn/components/ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shadcn/components/ui/tooltip";
import { textVariants } from "@/utils/constants/textVariants";

export default function ContactCard({
  icon,
  cardTitle,
  children,
  className,
  tooltip,
  language,
  link,
  ...rest
}: {
  icon: React.ReactNode;
  cardTitle: string;
  tooltip: typeof textVariants.sections.contacts.contact.phone.tooltip;
  language: "br" | "us";
  link: string;
} & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger
          asChild
          className={`contact-card relative z-[51] flex w-full flex-col items-center justify-center gap-1 rounded-md bg-opacity-20 p-4 pt-[38px] shadow-md shadow-transparent duration-300 hover:cursor-pointer hover:bg-white hover:shadow-neutral-200 hover:[backdrop-filter:blur(12px)] dark:hover:bg-transparent dark:hover:shadow-neutral-900 md:pt-[44px] ${className}`}
        >
          <a
            href={link}
            target="_blank"
            className="z-[51] relative flex justify-center gap-2"
          >
            <Title variant="with-bg-icon" mainText={cardTitle} bgIcon={icon} />
            {children}
          </a>
        </TooltipTrigger>
        <TooltipContent className="flex items-center gap-2 bg-white dark:bg-black border-neutral-300 dark:border-neutral-700">
          <p>{tooltip.text[language]}</p>
          {tooltip.icon}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

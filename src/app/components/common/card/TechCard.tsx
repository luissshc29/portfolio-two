"use client";

import { Stack } from "@/utils/types/Stack";
import React, { useRef, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/shadcn/components/ui/hover-card";
import { useHover } from "usehooks-ts";
import { Separator } from "@/shadcn/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadcn/components/ui/popover";
import { RiExternalLinkLine } from "react-icons/ri";

// "isUserDeviceTouchscreen" is used to know whether the user is accessing on a touchscreen device.
export default function TechCard({
  tech,
  theme,
  language,
  isUserDeviceTouchscreen,
}: {
  tech: Stack;
  theme: "light" | "dark";
  language: "br" | "us";
  isUserDeviceTouchscreen: boolean;
}) {
  const ref = useRef(null);
  const isHovered = useHover(ref);

  const [drowpdownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <>
      {!isUserDeviceTouchscreen ? (
        <div ref={ref}>
          <HoverCard openDelay={200} closeDelay={200}>
            <HoverCardTrigger
              asChild
              className={`flex h-fit w-fit items-center justify-center rounded-md border-[2px] p-6 duration-200 hover:cursor-pointer`}
              style={
                isHovered
                  ? { borderColor: tech.color[theme], color: tech.color[theme] }
                  : {
                      borderColor: "transparent",
                      color: "#525252",
                    }
              }
            >
              <button className="text-6xl">
                <tech.component />
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="max-w-screen min-w-80 md:max-w-[400px]">
              <div className="relative z-[51]">
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center rounded-full text-white"
                    style={{ color: tech.color[theme] }}
                  >
                    <tech.component className="text-4xl" />
                  </div>
                  <div className="flex w-full flex-col text-left">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-bold md:text-base">
                        {tech.name}
                      </p>
                      <a href={tech.url} target="_blank">
                        <RiExternalLinkLine className="text-lg" />
                      </a>
                    </div>
                    <p className="text-xs dark:text-neutral-500">{tech.url}</p>
                  </div>
                </div>
                <Separator className="mx-auto my-3 w-full bg-neutral-500 dark:bg-neutral-700" />
                <p className="text-left text-xs">
                  {tech.description[language]}
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      ) : (
        <div>
          <Popover onOpenChange={(o) => setDropdownOpen(o)}>
            <PopoverTrigger
              className={`flex h-fit w-fit items-center justify-center rounded-md border-[2px] p-6 text-6xl duration-200 hover:cursor-pointer`}
              style={
                drowpdownOpen
                  ? { borderColor: tech.color[theme], color: tech.color[theme] }
                  : {
                      borderColor: "transparent",
                      color: "#525252",
                    }
              }
            >
              <tech.component />
            </PopoverTrigger>
            <PopoverContent className="w-min min-w-80 max-w-[400px] p-4">
              <div className="relative z-[51]">
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center rounded-full text-white"
                    style={{ color: tech.color[theme] }}
                  >
                    <tech.component className="text-4xl" />
                  </div>
                  <div className="flex w-full flex-col text-left">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-bold md:text-base">
                        {tech.name}
                      </p>
                      <a href={tech.url} target="_blank">
                        <RiExternalLinkLine className="text-lg" />
                      </a>
                    </div>
                    <p className="text-xs dark:text-neutral-500">{tech.url}</p>
                  </div>
                </div>
                <Separator className="mx-auto my-3 w-full bg-neutral-500 dark:bg-neutral-700" />
                <p className="text-left text-xs">
                  {tech.description[language]}
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      )}
    </>
  );
}

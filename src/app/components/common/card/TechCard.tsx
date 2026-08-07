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
  style,
  ...rest
}: {
  tech: Stack;
  theme: "light" | "dark";
  language: "br" | "us";
  isUserDeviceTouchscreen: boolean;
} & React.HTMLAttributes<HTMLDivElement>) {
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
              className={`flex h-fit w-fit animate-content-up items-center justify-center rounded-md border-[2px] p-6 opacity-0 duration-200 hover:cursor-pointer`}
              style={
                isHovered
                  ? {
                      borderColor: tech.color[theme],
                      color: tech.color[theme],
                      ...style,
                    }
                  : {
                      borderColor: "transparent",
                      color: "#525252",
                      ...style,
                    }
              }
            >
              <button className="text-6xl">
                <tech.component />
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="z-[100] relative bg-black min-w-80 max-w-screen md:max-w-[400px]">
              <div className="z-[100] relative">
                <div className="flex items-center gap-3">
                  <div
                    className="flex justify-center items-center rounded-full text-white"
                    style={{ color: tech.color[theme] }}
                  >
                    <tech.component className="text-4xl" />
                  </div>
                  <div className="flex flex-col w-full text-left">
                    <div className="flex justify-between items-center gap-2">
                      <p className="font-bold text-sm md:text-base">
                        {tech.name}
                      </p>
                      <a href={tech.url} target="_blank">
                        <RiExternalLinkLine className="text-lg" />
                      </a>
                    </div>
                    <p className="dark:text-neutral-500 text-xs">{tech.url}</p>
                  </div>
                </div>
                <Separator className="bg-neutral-500 dark:bg-neutral-700 mx-auto my-3 w-full" />
                <p className="text-xs text-left">
                  {tech.description[language]}
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      ) : (
        <div
          ref={ref}
          className="opacity-0 animate-content-up"
          style={{
            ...style,
          }}
          {...rest}
        >
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
            <PopoverContent className="z-[100] p-4 w-min min-w-80 max-w-[400px]">
              <div className="z-[100] relative">
                <div className="flex items-center gap-3">
                  <div
                    className="flex justify-center items-center rounded-full text-white"
                    style={{ color: tech.color[theme] }}
                  >
                    <tech.component className="text-4xl" />
                  </div>
                  <div className="flex flex-col w-full text-left">
                    <div className="flex justify-between items-center gap-2">
                      <p className="font-bold text-sm md:text-base">
                        {tech.name}
                      </p>
                      <a href={tech.url} target="_blank">
                        <RiExternalLinkLine className="text-lg" />
                      </a>
                    </div>
                    <p className="dark:text-neutral-500 text-xs">{tech.url}</p>
                  </div>
                </div>
                <Separator className="bg-neutral-500 dark:bg-neutral-700 mx-auto my-3 w-full" />
                <p className="text-xs text-left">
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

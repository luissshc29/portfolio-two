"use client";

import { Stack } from "@/utils/types/Stack";
import { useTheme } from "next-themes";
import React from "react";

export default function InfiniteSlider({ items }: { items: Stack[] }) {
  const { resolvedTheme } = useTheme();
  return (
    <div className="slider relative mx-auto flex h-[10vh] w-[80vw] items-center overflow-hidden md:w-[50vw]">
      <div className="slide-track flex animate-slide justify-around">
        {/* Original list */}
        {items.map((item) => (
          <a
            href={item.url}
            target="_blank"
            className="slide mx-4 h-fit text-2xl"
            key={item.id}
            title={item.name}
          >
            <item.component
              style={{ color: item.color[resolvedTheme as "light" | "dark"] }}
            />
          </a>
        ))}
        {/* Duplicate list */}
        {items.map((item) => (
          <a
            href={item.url}
            target="_blank"
            className="slide mx-4 h-fit text-2xl"
            key={item.id}
            title={item.name}
          >
            <item.component
              style={{ color: item.color[resolvedTheme as "light" | "dark"] }}
            />
          </a>
        ))}
      </div>
      <div className="z-1 absolute left-0 top-0 h-full w-[40px] bg-gradient-to-r from-white to-transparent dark:from-black"></div>
      <div className="z-1 absolute right-0 top-0 h-full w-[40px] bg-gradient-to-l from-white to-transparent dark:from-black"></div>
    </div>
  );
}

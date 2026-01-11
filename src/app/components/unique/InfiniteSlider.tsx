"use client";

import { stacks } from "@/utils/constants/stacks";
import { useTheme } from "next-themes";
import React from "react";

export default function InfiniteSlider({ items }: { items: typeof stacks }) {
  const { resolvedTheme } = useTheme();
  return (
    <div className="relative flex items-center mx-auto w-[80vw] md:w-[50vw] h-[10vh] overflow-hidden slider">
      <div className="flex justify-around animate-slide slide-track">
        {/* Original list */}
        {items.map((item) => (
          <a
            href={item.url}
            target="_blank"
            className="mx-4 h-fit text-2xl slide"
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
            className="mx-4 h-fit text-2xl slide"
            key={item.id}
            title={item.name}
          >
            <item.component
              style={{ color: item.color[resolvedTheme as "light" | "dark"] }}
            />
          </a>
        ))}
      </div>
      <div className="top-0 left-0 z-1 absolute bg-gradient-to-l from-transparent dark:from-transparent to-white dark:to-black rounded-full w-[40px] h-full"></div>
      <div className="top-0 right-0 z-1 absolute bg-gradient-to-r from-transparent dark:from-transparent to-white dark:to-black rounded-full w-[40px] h-full"></div>
    </div>
  );
}

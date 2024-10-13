import { Stack } from "@/utils/types/Stack";
import React from "react";

export default function InfiniteSlider({ items }: { items: Stack[] }) {
  return (
    <div className="slider relative mx-auto flex h-[10vh] w-[80vw] items-center overflow-hidden md:w-[50vw]">
      <div className="slide-track flex animate-slide justify-around">
        {/* Original list */}
        {items.map((item) => (
          <a
            href={item.url}
            target="_blank"
            className="slide mx-4 h-fit w-[25px]"
            key={item.id}
            title={item.name}
          >
            {item.component}
          </a>
        ))}
        {/* Duplicate list */}
        {items.map((item) => (
          <a
            href={item.url}
            target="_black"
            className="slide mx-4 h-fit w-[25px]"
            key={item.id}
            title={item.name}
          >
            {item.component}
          </a>
        ))}
      </div>
      <div className="z-1 absolute left-0 top-0 h-full w-[40px] bg-gradient-to-r from-white to-transparent dark:from-black"></div>
      <div className="z-1 absolute right-0 top-0 h-full w-[40px] bg-gradient-to-l from-white to-transparent dark:from-black"></div>
    </div>
  );
}

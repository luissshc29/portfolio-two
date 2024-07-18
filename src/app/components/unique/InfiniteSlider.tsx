import { Stack } from "@/utils/types/Stack";
import React from "react";

export default function InfiniteSlider({ items }: { items: Stack[] }) {
  return (
    <div className="relative flex items-center mx-auto w-[80vw] md:w-[50vw] h-[10vh] overflow-hidden slider">
      <div className="flex justify-around animate-slide slide-track">
        {/* Original list */}
        {items.map((item) => (
          <div className="mx-4 w-[25px] h-fit slide" key={item.id}>
            {item.component}
          </div>
        ))}
        {/* Duplicate list */}
        {items.map((item) => (
          <div className="mx-4 w-[25px] h-fit slide" key={item.id}>
            {item.component}
          </div>
        ))}
      </div>
      <div className="top-0 left-0 z-1 absolute bg-gradient-to-r from-black to-transparent w-[40px] h-full"></div>
      <div className="top-0 right-0 z-1 absolute bg-gradient-to-l from-black to-transparent w-[40px] h-full"></div>
    </div>
  );
}
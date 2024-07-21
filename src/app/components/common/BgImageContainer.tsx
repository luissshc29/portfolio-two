import React from "react";

interface BgImageContainerProps {
  darkImgSrc: string;
  lightImgSrc: string;
}

export default function BgImageContainer({
  children,
  darkImgSrc,
  lightImgSrc,
  ...rest
}: {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> &
  BgImageContainerProps) {
  return (
    <div className="relative min-h-screen w-screen overflow-clip" {...rest}>
      <img
        src={darkImgSrc}
        className="absolute z-[-10] hidden h-full w-full min-w-[1024px] dark:block"
      />
      <img
        src={lightImgSrc}
        className="absolute z-[-10] block h-full w-full min-w-[1024px] dark:hidden"
      />
      <div className="absolute z-[-9] h-full min-h-screen w-screen bg-white bg-opacity-95 dark:bg-black dark:bg-opacity-95"></div>
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 p-8 text-center md:gap-16 md:p-10">
        {children}
      </div>
    </div>
  );
}

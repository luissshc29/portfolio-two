import React from "react";

interface BgImageContainerProps {
  src: string;
}

export default function BgImageContainer({
  children,
  src,
  ...rest
}: {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> &
  BgImageContainerProps) {
  return (
    <div className="relative w-screen min-h-screen overflow-clip" {...rest}>
      <img src={src} className="z-[-10] absolute min-w-[1024px] min-h-screen" />
      <div className="z-[-10] absolute bg-black bg-opacity-95 w-screen h-full min-h-screen"></div>
      <div className="relative flex flex-col justify-center items-center gap-8 md:gap-16 p-8 md:p-10 w-full min-h-screen text-center">
        {children}
      </div>
    </div>
  );
}

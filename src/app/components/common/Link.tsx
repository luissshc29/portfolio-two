import React from "react";

interface Link {
  variant?: "primary" | "secondary" | "tertiary";
  navigateTo?: string;
}

export default function Link({
  children,
  variant = "primary",
  navigateTo = "",
  className = "",
  ...rest
}: {
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> &
  Link) {
  return (
    <>
      {variant === "primary" ? (
        <a
          className={`my-4 flex h-fit w-fit items-center gap-4 rounded-sm border-2 border-neutral-700 px-4 py-3 text-center text-xs font-bold no-underline duration-300 hover:cursor-pointer hover:bg-neutral-800 md:text-sm ${className}`}
          target="_blank"
          {...rest}
        >
          {children}
        </a>
      ) : variant === "secondary" ? (
        <a
          target="_blank"
          className={`relative z-10 m-0 flex items-center gap-1 border-b-[1px] border-white p-0 pb-[1px] text-sm font-medium md:text-base ${className}`}
          {...rest}
        >
          {children}
        </a>
      ) : (
        <a
          target="_blank"
          className={`relative z-10 m-0 flex items-center gap-1 border-none p-0 pb-[1px] text-sm font-medium text-neutral-400 ${className}`}
          {...rest}
        >
          {children}
        </a>
      )}
    </>
  );
}

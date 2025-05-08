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
          className={`my-4 flex items-center gap-4 rounded-sm border-2 border-neutral-700 px-4 py-3 text-center text-xs font-bold no-underline duration-300 hover:cursor-pointer hover:bg-neutral-200 hover:shadow-sm hover:shadow-neutral-300 dark:hover:bg-neutral-900 dark:hover:shadow-neutral-800 md:text-sm ${className}`}
          target="_blank"
          {...rest}
        >
          {children}
        </a>
      ) : variant === "secondary" ? (
        <a
          target="_blank"
          className={`relative z-10 m-0 flex items-center gap-1 border-b-[1px] border-black p-0 pb-[1px] text-sm font-medium dark:border-white md:text-base ${className}`}
          {...rest}
        >
          {children}
        </a>
      ) : (
        <a
          target="_blank"
          className={`relative z-10 m-0 flex items-center gap-1 border-none p-0 pb-[1px] font-medium text-neutral-700 underline dark:text-neutral-400 ${className}`}
          {...rest}
        >
          {children}
        </a>
      )}
    </>
  );
}

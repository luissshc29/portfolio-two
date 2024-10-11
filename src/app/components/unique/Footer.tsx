import React from "react";
import Link from "../common/Link";

export default function Footer() {
  return (
    <footer className="z-[1000] mx-auto mb-4 flex w-fit items-center justify-center gap-1 text-xs text-neutral-700 dark:text-neutral-400 md:text-sm">
      Copyright &copy; 2024{" "}
      <Link href="/" variant="tertiary" target="#">
        Luis Henrique C. Cavalcante
      </Link>
    </footer>
  );
}

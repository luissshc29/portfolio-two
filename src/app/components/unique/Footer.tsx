import React from "react";
import Link from "../common/Link";

export default function Footer() {
  return (
    <footer className="absolute bottom-4 z-[10] flex w-screen items-center justify-center gap-1 text-xs text-neutral-700 dark:text-neutral-400 md:text-sm">
      Copyright &copy; 2024{" "}
      <Link href="/" variant="tertiary" target="#">
        Luis Henrique C. Cavalcante
      </Link>
    </footer>
  );
}

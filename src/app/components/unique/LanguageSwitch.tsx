"use client";

import React from "react";
import { brFlag } from "@/utils/svg/br";
import { usFlag } from "@/utils/svg/us";
import classNames from "classnames";
import { ImLoop2 } from "react-icons/im";
import { useLanguageContext } from "@/utils/context/LanguageContext";

export default function LanguageSwitch() {
  const { language, changeLanguage } = useLanguageContext();

  const generalButtonClasses = "duration-300 hover:cursor-pointer";
  const activeButtonClasses = "hover:cursor-pointer duration-300 scale-[1.3]";

  function alterLanguage() {
    if (language === "br") {
      changeLanguage?.("us");
    } else {
      changeLanguage?.("br");
    }
  }

  return (
    <div
      className={
        "relative flex w-fit scale-[1.4] items-center gap-4 text-center md:scale-[2.0]"
      }
    >
      <div
        className={classNames(generalButtonClasses, {
          [activeButtonClasses]: language === "br",
          ["opacity-100"]: language === "br",
          ["opacity-30 dark:opacity-50"]: language === "us",
        })}
        onClick={() => alterLanguage()}
      >
        {brFlag}
      </div>
      <div
        className={
          language === "us"
            ? "transition-all duration-1000 [transform:rotateZ(360deg)]"
            : "transition-all duration-1000 [transform:rotateZ(-360deg)]"
        }
      >
        <ImLoop2 className="text-lg md:text-xl" />
      </div>
      <div
        className={classNames(generalButtonClasses, {
          [activeButtonClasses]: language === "us",
          ["opacity-100"]: language === "us",
          ["opacity-30 dark:opacity-50"]: language === "br",
        })}
        onClick={() => alterLanguage()}
      >
        {usFlag}
      </div>
    </div>
  );
}

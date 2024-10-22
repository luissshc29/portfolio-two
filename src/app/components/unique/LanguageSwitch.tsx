"use client";

import React from "react";
import { brFlag } from "@/utils/svg/br";
import { usFlag } from "@/utils/svg/us";
import classNames from "classnames";
import { useLanguageContext } from "@/utils/context/LanguageContext";
import { PiArrowFatLinesRightFill } from "react-icons/pi";

export default function LanguageSwitch() {
  const { language, changeLanguage } = useLanguageContext();

  const generalButtonClasses = "duration-300 hover:cursor-pointer active:scale-[.85]";
  const activeButtonClasses = "hover:cursor-pointer duration-300 scale-[1.3] active:scale-[1.3]";

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
      <button
        className={classNames(generalButtonClasses, {
          [activeButtonClasses]: language === "br",
          ["opacity-100"]: language === "br",
          ["opacity-30 dark:opacity-50"]: language === "us",
        })}
        onClick={() => alterLanguage()}
      >
        {brFlag}
      </button>
      <div
        className={
          language === "us"
            ? "transition-all duration-500 [transform:rotateZ(0turn)]"
            : "transition-all duration-500 [transform:rotate(-0.5turn)]"
        }
      >
        <PiArrowFatLinesRightFill className="text-lg md:text-xl" />
      </div>
      <button
        className={classNames(generalButtonClasses, {
          [activeButtonClasses]: language === "us",
          ["opacity-100"]: language === "us",
          ["opacity-30 dark:opacity-50"]: language === "br",
        })}
        onClick={() => alterLanguage()}
      >
        {usFlag}
      </button>
    </div>
  );
}

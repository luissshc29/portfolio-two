"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

const languageContext = createContext<{
  language: "br" | "us";
  setLanguage?: Dispatch<SetStateAction<"br" | "us">>;
}>({ language: "br" });

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const url = new URL(window.location.href);
  const langParams = url.searchParams.get("lang");
  const isValidLangParams = langParams === "br" || langParams === "us";

  const [language, setLanguage] = useState<"br" | "us">(
    isValidLangParams ? langParams : "br",
  );
  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      {children}
    </languageContext.Provider>
  );
}

export function useLanguageContext() {
  const { language, setLanguage } = useContext(languageContext);

  function changeLanguage(lang: "br" | "us") {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);

    window.history.pushState(null, "", url.toString());
    setLanguage?.(lang);
  }

  return {
    language,
    changeLanguage,
  };
}

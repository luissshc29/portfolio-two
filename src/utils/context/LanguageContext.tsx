"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
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
  const [language, setLanguage] = useState<"br" | "us">("br");
  useEffect(() => {
    if (window) {
      const url = new URL(window.location.href);
      const langParams = url.searchParams.get("lang");
      const isValidLangParams = langParams === "br" || langParams === "us";
      setLanguage(isValidLangParams ? langParams : "br");
    }

    if (document) {
      if (language === "br") {
        document.title = "Luis Henrique | Software Developer";
      } else {
        document.title = "Luis Henrique | Desenvolvedor de Software";
      }
    }
  }, []);
  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      {children}
    </languageContext.Provider>
  );
}

export function useLanguageContext() {
  const { language, setLanguage } = useContext(languageContext);

  function changeLanguage(lang: "br" | "us") {
    if (window) {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);

      window.history.pushState(null, "", url.toString());
      setLanguage?.(lang);
    }
  }

  return {
    language,
    changeLanguage,
  };
}

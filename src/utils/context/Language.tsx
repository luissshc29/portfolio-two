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
  const [language, setLanguage] = useState<"br" | "us">("br");
  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      {children}
    </languageContext.Provider>
  );
}

export function useLanguageContext() {
  const { language, setLanguage } = useContext(languageContext);

  return {
    language,
    setLanguage,
  };
}

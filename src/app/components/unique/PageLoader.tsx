"use client";

import React, { useEffect, useState } from "react";

const loadingTexts = [
  "Carregando",
  "Aguarde um momento",
  "Preparando o conteúdo",
  "Quase lá",
  "Estamos quase prontos!",
  "Estamos trabalhando nisso",
  "Obrigado pela paciência",
  "Só um instante",
  "Quase pronto",
  "Estamos ajustando tudo",
  "Finalizando a preparação",
  "Segure um momento",
  "Carregando conteúdo",
  "Em processamento",
  "Configurando sua experiência",
  "Carregando recursos",
];

export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  // Component that makes the page render only when fully loaded
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingText, setLoadingText] = useState<string>("");

  const [animate, setAnimate] = useState<string>("");

  useEffect(() => {
    // Selects a random loading text
    const randomText =
      loadingTexts[Math.floor(Math.random() * loadingTexts.length)];
    setLoadingText(randomText);

    // Sets loading false when window finishes loading
    window.onload = () => {
      setTimeout(() => {
        setAnimate(
          "animate-fade [animation-duration:500ms] [animation-fill-mode:forwards]",
        );
      }, 500);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    // Sets loading false in case window.onload doesn't work
    if (loading) {
      setTimeout(() => {
        setAnimate(
          "animate-fade [animation-duration:500ms] [animation-fill-mode:forwards]",
        );
      }, 500);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);

  if (loading) {
    return (
      <div
        className={`flex h-screen w-screen flex-col items-center justify-center gap-2 bg-white dark:bg-black md:gap-4 ${animate}`}
      >
        <div className="relative flex h-fit w-fit scale-[.8] flex-col items-center justify-center md:scale-100">
          <img
            src="/images/logo/logo-white-small.png"
            alt="Small white logo"
            className="absolute hidden h-[35px] w-[35px] dark:inline-block"
          />
          <img
            src="/images/logo/logo-black-small.png"
            alt="Small black logo"
            className="absolute inline-block h-[35px] w-[35px] dark:hidden"
          />
          <img
            src="/images/loading/loading-circle-white.svg"
            alt="Loading image"
            className="hidden dark:block"
          />
          <img
            src="/images/loading/loading-circle-black.svg"
            alt="Loading image"
            className="block dark:hidden"
          />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-black dark:text-white">
            {loadingText ? loadingText : "Carregando"}
          </p>
          <img
            src="/images/loading/loading-dots-white.svg"
            alt="Loading image"
            className="hidden dark:block"
          />
          <img
            src="/images/loading/loading-dots-black.svg"
            alt="Loading image"
            className="block dark:hidden"
          />
          <img />
        </div>
      </div>
    );
  }

  return (
    <div className="animate-show-up [animation-duration:1500ms]">
      {children}
    </div>
  );
}

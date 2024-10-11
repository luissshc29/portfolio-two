"use client";

import React, { useEffect, useState } from "react";

const loadingTexts = [
  { br: "Carregando", us: "Loading" },
  { br: "Preparando o conteúdo", us: "Preparing content" },
  { br: "Só um instante", us: "Just a moment" },
  { br: "Estamos ajustando tudo", us: "We're adjusting everything" },
  { br: "Finalizando a preparação", us: "Finalizing preparation" },
  { br: "Carregando conteúdo", us: "Loading content" },
  { br: "Em processamento", us: "Processing" },
  { br: "Configurando sua experiência", us: "Setting up your experience" },
  { br: "Carregando recursos", us: "Loading resources" }
];


// Component that makes the page render only when fully loaded
export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingText, setLoadingText] = useState<string>("");

  const [animate, setAnimate] = useState<string>("");

  useEffect(() => {
    const url = new URL(window.location.href)
    const langParam = url.searchParams.get('lang')
    const isValidLangParam = langParam === 'br' || langParam === 'us'
    // Selects a random loading text
    const randomText =
      loadingTexts[Math.floor(Math.random() * loadingTexts.length)][isValidLangParam ? langParam : 'br'];
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
            loading="eager"
          />
          <img
            src="/images/logo/logo-black-small.png"
            alt="Small black logo"
            className="absolute inline-block h-[35px] w-[35px] dark:hidden"
            loading="eager"
          />
          <img
            src="/images/loading/loading-circle-white.svg"
            alt="Loading image"
            className="hidden dark:block"
            loading="eager"
          />
          <img
            src="/images/loading/loading-circle-black.svg"
            alt="Loading image"
            className="block dark:hidden"
            loading="eager"
          />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-black dark:text-white duration-500 transition-all">
            {loadingText}
          </p>
          <img
            src="/images/loading/loading-dots-white.svg"
            alt="Loading image"
            className="hidden dark:block"
            loading="eager"
          />
          <img
            src="/images/loading/loading-dots-black.svg"
            alt="Loading image"
            className="block dark:hidden"
            loading="eager"
          />
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

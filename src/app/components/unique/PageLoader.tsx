"use client";

import React, { useEffect, useState } from "react";
import BgImageContainer from "../common/BgImageContainer";

const loadingTexts = [
  { br: "Preparando o conteúdo", us: "Preparing content" },
  { br: "Ajustando conteúdo", us: "Adjusting content" },
  { br: "Carregando conteúdo", us: "Loading content" },
  { br: "Configurando sua experiência", us: "Setting up your experience" },
  { br: "Carregando recursos", us: "Loading resources" },
  { br: "Otimizando performance", us: "Optimizing performance" },
  { br: "Carregando funções", us: "Loading features" },
  { br: "Preparando interface", us: "Preparing interface" },
  { br: "Ajustando a interface", us: "Adjusting the interface" },
  { br: "Preparando novos recursos", us: "Preparing new features" },
  { br: "Otimizando sua experiência", us: "Optimizing your experience" },
  { br: "Verificando a integridade da página", us: "Checking page integrity" },
  { br: "Atualizando informações essenciais", us: "Updating essential information" },
  { br: "Ajustando exibição", us: "Adjusting display" },
  { br: "Finalizando ajustes", us: "Finalizing adjustments" },
  { br: "Preparando visualização", us: "Preparing visualization" },
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
    const url = new URL(window.location.href);
    const langParam = url.searchParams.get("lang");
    const isValidLangParam = langParam === "br" || langParam === "us";
    // Selects a random loading text
    const randomText =
      loadingTexts[Math.floor(Math.random() * loadingTexts.length)][
        isValidLangParam ? langParam : "br"
      ];

    let i = 0;
    function typing(text: string) {
      if (i < text.length) {
        setLoadingText((previous) => (previous += text.charAt(i)));
        setTimeout(() => {
          i++;
          typing(text);
        }, 85);
      } else {
        const randomLoadingTime = Math.random() * 500 + 1000;

        setTimeout(() => {
          setAnimate(
            "animate-fade [animation-duration:500ms] [animation-fill-mode:forwards]",
          );

          setTimeout(() => {
            setLoading(false);
          }, 500);
        }, randomLoadingTime);
      }
    }

    let windowMounted = false

    const handleLoad = () => {
      windowMounted = true
      typing(randomText);
      window.removeEventListener('load', handleLoad); 
    };

    window.addEventListener('load', handleLoad);

    const typingTimeout = setTimeout(() => {
      if (!windowMounted) {
        typing(randomText);
      }
    }, 500);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(typingTimeout)
    };

  }, []);

  if (loading) {
    return (
      <BgImageContainer
        slideAnimation={false}
        className={`flex max-h-screen w-screen flex-col justify-center bg-white dark:bg-black ${animate} `}
      >
        <div className="fixed bottom-2 right-2 flex h-fit w-fit scale-[.8] flex-col items-center justify-center md:scale-100">
          <img
            src="/images/logo/logo-white-small.png"
            alt="Small white logo"
            className="absolute hidden h-[20px] w-[20px] dark:inline-block"
            loading="eager"
          />
          <img
            src="/images/logo/logo-black-small.png"
            alt="Small black logo"
            className="absolute inline-block h-[20px] w-[20px] dark:hidden"
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
        <div className="flex min-h-[64px] w-full items-end gap-2 text-left font-title text-4xl md:justify-center">
          {loadingText && (
            <>
              <p className="text-black transition-all duration-500 dark:text-white">
                {loadingText}
                <span className="animate-blink">_</span>
              </p>
              {/* <img
                src="/images/loading/loading-dots-white.svg"
                alt="Loading image"
                className="dark:block hidden"
                loading="eager"
              />
              <img
                src="/images/loading/loading-dots-black.svg"
                alt="Loading image"
                className="block dark:hidden"
                loading="eager"
              /> */}
            </>
          )}
        </div>
      </BgImageContainer>
    );
  }

  return (
    <div className="animate-show-up [animation-duration:1500ms]">
      {children}
    </div>
  );
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import BgImageContainer from "../common/BgImageContainer";
import { useInView } from "react-intersection-observer";

const loadingTexts = [
  { br: "Preparando o conteúdo", us: "Preparing content" },
  { br: "Ajustando conteúdo", us: "Adjusting content" },
  { br: "Carregando conteúdo", us: "Loading content" },
  { br: "Configurando sua experiência", us: "Setting up your experience" },
  { br: "Carregando recursos", us: "Loading resources" },
  { br: "Otimizando performance", us: "Optimizing performance" },
  { br: "Preparando interface", us: "Preparing interface" },
  { br: "Ajustando a interface", us: "Adjusting the interface" },
  { br: "Preparando recursos", us: "Preparing features" },
  { br: "Otimizando sua experiência", us: "Optimizing your experience" },
  { br: "Verificando a integridade da página", us: "Checking page integrity" },
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

  const loadingSvgInView = useInView();

  // Avoiding wrong typing
  const textIndex = useRef(0);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Setting progress bar values
  // const [progress, setProgress] = useState<number>(0);

  function typing(text: string) {
    if (textIndex.current < text.length) {
      // setProgress(
      //   Math.floor((textIndex.current / 1.5 / (text.length - 1)) * 100),
      // );
      const nextChar = text.charAt(textIndex.current);
      setLoadingText((previous) => previous + nextChar);
      textIndex.current += 1;
      typingTimeoutRef.current = setTimeout(() => typing(text), 100);
    } else {
      const randomLoadingTime = Math.random() * 500 + 1000;
      // var currentProgress = 66;
      // const remainingLoadingInterval = setInterval(
      //   () => {
      //     if (currentProgress < 100) {
      //       currentProgress++;
      //       setProgress(currentProgress);
      //     }
      //   },
      //   randomLoadingTime / (100 - currentProgress),
      // );
      // setTimeout(() => {
      //   clearInterval(remainingLoadingInterval);
      // }, randomLoadingTime);

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

  useEffect(() => {
    const url = new URL(window.location.href);
    const langParam = url.searchParams.get("lang");

    // Selecting a random loading text
    const randomText =
      loadingTexts[Math.floor(Math.random() * loadingTexts.length)][
        langParam === "br" || langParam === "us" ? langParam : "br"
      ];

    let windowMounted = false;

    const handleLoad = () => {
      windowMounted = true;
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      typing(randomText);
      window.removeEventListener("load", handleLoad);
    };

    window.addEventListener("load", handleLoad);

    // Checks after 1 second if event load worked, and manually starts typing if not
    const typingTimeout = setTimeout(() => {
      if (!windowMounted) {
        typing(randomText);
      }
    }, 1000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(typingTimeout);
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  if (loading) {
    return (
      <BgImageContainer
        slideAnimation={false}
        className={`pointer-events-none flex max-h-screen w-screen flex-col justify-start bg-white dark:bg-black ${animate} `}
      >
        {/* Loading Component */}
        <div
          className={`fixed bottom-2 right-2 flex h-fit w-fit scale-[.8] flex-col items-center justify-center transition-all duration-1000 md:scale-100 ${loadingSvgInView.inView ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"} `}
          ref={loadingSvgInView.ref}
        >
          <img
            src="/images/logo/logo-white-small.png"
            alt="Small white logo"
            className="hidden dark:inline-block absolute w-[20px] h-[20px]"
            loading="eager"
          />
          <img
            src="/images/logo/logo-black-small.png"
            alt="Small black logo"
            className="dark:hidden inline-block absolute w-[20px] h-[20px]"
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
            className="dark:hidden block"
            loading="eager"
          />
        </div>
        <div className="gap-2 md:mt-0 md:ml-16 w-full h-screen font-title text-4xl text-left">
          {loadingText && (
            <p className="self-start md:self-center mt-[25vh] min-h-fit text-black dark:text-white transition-all duration-500">
              {loadingText}
              <span className="animate-blink">_</span>
            </p>
          )}
        </div>
        {/* <div className="top-[85vh] md:top-[90vh] absolute flex opacity-70 w-screen">
          <div className="flex flex-col items-center opacity-100 mr-auto ml-0 w-2/3">
            <Progress
              value={progress}
              className="w-full h-1 transition-all duration-1000"
            />
          </div>
        </div> */}
      </BgImageContainer>
    );
  }

  return (
    <div className="animate-show-up [animation-duration:1500ms]">
      {children}
    </div>
  );
}

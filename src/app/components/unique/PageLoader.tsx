"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";
import BgImageContainer from "../common/BgImageContainer";
import { stacks } from "@/utils/constants/stacks";
import { Separator } from "@radix-ui/react-separator";
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
  { br: "Preparando novos recursos", us: "Preparing new features" },
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

  useEffect(() => {
    const url = new URL(window.location.href);
    const langParam = url.searchParams.get("lang");

    // Selecting a random loading text
    const randomText =
      loadingTexts[Math.floor(Math.random() * loadingTexts.length)][
        langParam === "br" || langParam === "us" ? langParam : "br"
      ];

    function typing(text: string) {
      if (textIndex.current < text.length) {
        const nextChar = text.charAt(textIndex.current);
        setLoadingText((previous) => previous + nextChar);
        textIndex.current += 1;
        typingTimeoutRef.current = setTimeout(() => typing(text), 100);
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

    // Checks after 1 second if event load worked, and manually types if not
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
        className={`flex max-h-screen w-screen flex-col justify-start bg-white dark:bg-black ${animate} `}
      >
        {/* Loading Component */}
        <div
          className={`fixed bottom-2 right-2 flex h-fit w-fit scale-[.8] flex-col items-center justify-center transition-all duration-1000 md:scale-100 ${loadingSvgInView.inView ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"} `}
          ref={loadingSvgInView.ref}
        >
          <img
            src="/images/logo/logo-white-small.png"
            alt="Small white logo"
            className="dark:inline-block absolute hidden w-[20px] h-[20px]"
            loading="eager"
          />
          <img
            src="/images/logo/logo-black-small.png"
            alt="Small black logo"
            className="inline-block absolute dark:hidden w-[20px] h-[20px]"
            loading="eager"
          />
          <img
            src="/images/loading/loading-circle-white.svg"
            alt="Loading image"
            className="dark:block hidden"
            loading="eager"
          />
          <img
            src="/images/loading/loading-circle-black.svg"
            alt="Loading image"
            className="block dark:hidden"
            loading="eager"
          />
        </div>
        <div className="gap-2 md:mt-0 w-full h-screen font-title text-4xl text-left md:text-center">
          {loadingText && (
            <p className="mt-[25vh] min-h-fit text-black dark:text-white transition-all duration-500 self-start md:self-center">
              {loadingText}
              <span className="animate-blink">_</span>
            </p>
          )}
        </div>
        <div className="top-[80vh] right-0 left-0 absolute flex gap-2 opacity-25 dark:opacity-20 mx-auto w-fit text-lg text-neutral-600 dark:text-neutral-200">
          <p className="text-sm">Made with</p>
          <Separator
            orientation="vertical"
            className="bg-neutral-600 dark:bg-neutral-200 opacity-100 w-[1px] h-5"
          />
          <div className="flex items-center gap-2">
            {stacks
              .filter((item) => [4, 6, 10].includes(item.id))
              .map((s) => (
                <Fragment key={s.id}>{s.component}</Fragment>
              ))}
          </div>
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

"use client";

import { Card, CardContent } from "@/shadcn/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shadcn/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shadcn/components/ui/drawer";
import { textVariants } from "@/utils/constants/textVariants";
import React, { useEffect, useState } from "react";
import { FiInfo, FiLink, FiXCircle } from "react-icons/fi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn/components/ui/carousel";
import { stacks } from "@/utils/constants/stacks";
import Link from "../Link";
import { LuClock4 } from "react-icons/lu";
import { Separator } from "@/shadcn/components/ui/separator";
import { useHeaderContext } from "@/utils/context/HeaderContext";
import { Project } from "@/utils/types/Project";
import { IoStarSharp } from "react-icons/io5";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "@/shadcn/components/ui/badge";
import { RiMedalLine } from "react-icons/ri";

export default function ProjectCard({
  data,
  language,
  theme,
  style,
  ...rest
}: {
  data: Project;
  language: "br" | "us";
  theme: "light" | "dark";
} & React.HTMLAttributes<HTMLDivElement>) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  const complexityStars = [
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
    {
      value: 5,
    },
  ];

  const [showingOnTechContainer, setShowingOnTechContainer] = useState<
    "icons" | "texts"
  >("icons");

  const projectStacks = stacks.filter((s) => data.stacks.includes(s.id));

  const { setHeaderVisible } = useHeaderContext();

  // Checking if Drawer is open and focusing on it
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  useEffect(() => {
    if (isDrawerOpen) {
      document
        .getElementById(
          `drawer-content-${data.title.br.toLowerCase().replaceAll(" ", "-")}`,
        )
        ?.focus();
    } else {
      document
        .getElementById(
          `drawer-content-${data.title.br.toLowerCase().replaceAll(" ", "-")}`,
        )
        ?.blur();
    }
  }, [isDrawerOpen]);

  return (
    <div
      className="relative opacity-0 shadow-lg overflow-hidden animate-content-up card"
      style={{
        ...style,
      }}
      {...rest}
    >
      {data.highlight && (
        <Badge className="top-0 right-0 absolute flex items-center gap-1 bg-green-600 shadow-green-800 shadow-md px-2 py-1 rounded-none rounded-bl-xl w-fit text-white text-xs transition-all animate-pulse duration-2000">
          <RiMedalLine className="text-lg" />
          <p>{language === "br" ? "Em destaque" : "Featured"}</p>
        </Badge>
      )}
      <img
        src={`${data.images.path}${data.images.list[0]}`}
        alt={data.title[language]}
        className="w-full h-full object-cover transition-all duration-500 ease-in-out card-image"
        loading="lazy"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 bg-black bg-opacity-50 opacity-0 p-2 font-semibold text-white text-3xl transition-all duration-500 ease-in-out card-overlay">
        <h1 className="font-title text-2xl semibold">{data.title[language]}</h1>

        {/* Desktop */}
        <Dialog onOpenChange={(e) => setHeaderVisible?.(!e)}>
          <DialogTrigger asChild className="hidden lg:block">
            <div className="hidden lg:flex items-center gap-1 font-text hover:cursor-pointer">
              <p className="font-medium text-base underline">
                {textVariants.others.labels.projects.card.text[language]}
              </p>
              <FiInfo className="text-base" />
            </div>
          </DialogTrigger>
          <DialogContent className="px-8 min-w-[85vw] h-fit">
            <div className="z-[1500] h-fit">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 font-title text-2xl">
                  {data.title[language]}
                  {data.highlight && (
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-[3px] bg-green-500 hover:bg-green-500 hover:dark:bg-green-400 dark:bg-green-400 hover:dark:bg-opacity-50 dark:bg-opacity-50 w-fit font-text text-white"
                    >
                      <RiMedalLine className="text-lg" />
                      <p>{language === "br" ? "Em destaque" : "Featured"}</p>
                    </Badge>
                  )}
                </DialogTitle>
                {data.url && (
                  <DialogDescription>
                    <Link
                      variant="tertiary"
                      className="text-base"
                      href={data.url}
                    >
                      {data.url}
                      <FiLink />
                    </Link>
                  </DialogDescription>
                )}
              </DialogHeader>
            </div>
            <div className="z-[1500] flex items-center gap-10 w-full h-full">
              <div className="flex flex-col items-start gap-[6px] w-1/2">
                <Carousel
                  className="w-full"
                  plugins={[plugin.current as any]}
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.play as any}
                  onTouchStart={plugin.current.stop}
                  onTouchEnd={plugin.current.play as any}
                >
                  <CarouselContent>
                    {data.images.list.map((url) => (
                      <CarouselItem
                        key={url}
                        className={
                          data.images.list.length > 1
                            ? "basis-[95%]"
                            : "basis-full"
                        }
                      >
                        <Card className="p-0 md:p-0">
                          <CardContent className="flex justify-center items-center p-0 md:p-0">
                            <img
                              src={`${data.images.path}${url}`}
                              className="rounded-sm"
                              alt={data.title[language]}
                              loading="lazy"
                            />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="flex justify-between items-center w-full text-neutral-600 dark:text-neutral-400 text-xs md:text-sm">
                  <div className="flex items-center gap-2">
                    <LuClock4 />
                    <p>{data.date[language]}</p>
                  </div>
                  <div>#{data.tag}</div>
                </div>
              </div>
              <div className="flex flex-col justify-around items-start w-1/2 h-full">
                <div className="flex flex-col justify-center items-start gap-3 w-full text-base">
                  <div className="flex flex-col gap-1">
                    <span className="font-bold">
                      {
                        textVariants.others.labels.projects.modal.description[
                          language
                        ]
                      }
                      :
                    </span>
                    <p
                      className="text-neutral-700 dark:text-neutral-300"
                      dangerouslySetInnerHTML={{
                        __html: data.description[language],
                      }}
                    />
                  </div>
                  <Separator />
                  <div className="flex justify-start items-center gap-2 w-full">
                    <span className="w-fit font-bold">
                      {
                        textVariants.others.labels.projects.modal.stacks[
                          language
                        ]
                      }
                      :
                    </span>
                    <div
                      className={`tech flex h-8 w-2/3 items-center justify-center gap-1 ${showingOnTechContainer === "icons" ? "" : "flipped"}`}
                    >
                      <div className="relative flex justify-center items-center w-full h-full tech-inner">
                        <div className="absolute flex justify-start gap-2 w-full text-2xl tech-front">
                          {projectStacks.map((stack) => (
                            <p key={stack.id}>
                              <stack.component
                                style={{ color: stack.color[theme] }}
                              />
                            </p>
                          ))}
                        </div>
                        <div className="absolute flex flex-wrap justify-start gap-x-2 w-full font-medium text-base tech-back">
                          {projectStacks.map((stack) => (
                            <p key={stack.id}>{stack.name}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-fit">
                      {showingOnTechContainer === "icons" ? (
                        <FiInfo
                          className="text-xl hover:cursor-pointer"
                          onClick={() => setShowingOnTechContainer("texts")}
                        />
                      ) : (
                        <FiXCircle
                          className="text-xl hover:cursor-pointer"
                          onClick={() => setShowingOnTechContainer("icons")}
                        />
                      )}
                    </div>
                  </div>
                  <Separator />
                  {data.repository && (
                    <div className="flex items-center gap-1">
                      <span className="font-bold">
                        {
                          textVariants.others.labels.projects.modal.repo[
                            language
                          ]
                        }
                        :
                      </span>
                      <Link
                        variant="tertiary"
                        href={data.repository}
                        className="text-base"
                      >
                        {data.repository}
                        <FiLink />
                      </Link>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <p>
                    {
                      textVariants.others.labels.projects.modal.complexity[
                        language
                      ]
                    }
                  </p>
                  <div className="flex items-center gap-1 text-lg">
                    {complexityStars.map((item) => (
                      <div key={item.value}>
                        {item.value <= data.complexity ? (
                          <IoStarSharp className="text-black dark:text-white" />
                        ) : (
                          <IoStarSharp className="opacity-[.15]" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Mobile */}
        <Drawer
          onOpenChange={(e) => {
            setHeaderVisible?.(!e);
            setIsDrawerOpen(e);
          }}
          setBackgroundColorOnScale={false}
        >
          <DrawerTrigger asChild className="lg:hidden block">
            <div className="lg:hidden flex items-center gap-1 hover:cursor-pointer">
              <p className="font-medium text-sm underline">
                {textVariants.others.labels.projects.card.text[language]}
              </p>
              <FiInfo className="text-base" />
            </div>
          </DrawerTrigger>
          <DrawerContent
            className="[-webkit-overflow-scrolling:touch] [touch-action:manipulation]"
            id={`drawer-content-${data.title.br.toLowerCase().replaceAll(" ", "-")}`}
          >
            <div className="z-[1500] mx-auto px-4 md:px-8 pt-4 pb-6 w-full h-fit max-h-[80vh] md:max-h-[70vh] overflow-y-scroll">
              <DrawerHeader className="gap-0 px-0 w-full">
                <DrawerTitle className="flex items-center gap-2 w-fit min-w-[66%] font-title text-2xl">
                  {data.title[language]}
                  {data.highlight && (
                    <Badge
                      variant="secondary"
                      className="flex justify-center items-center gap-[3px] bg-green-500 hover:bg-green-500 hover:dark:bg-green-400 dark:bg-green-400 hover:dark:bg-opacity-50 dark:bg-opacity-50 min-w-fit font-text text-white"
                    >
                      <RiMedalLine className="text-lg" />
                      <p>{language === "br" ? "Em destaque" : "Featured"}</p>
                    </Badge>
                  )}
                </DrawerTitle>
                <DrawerDescription>
                  <Link
                    variant="tertiary"
                    href={data.url}
                    className="text-sm md:text-base"
                  >
                    {data.url}
                    <FiLink />
                  </Link>
                </DrawerDescription>
              </DrawerHeader>
              <div className="z-[1500] flex [@media_(min-width:700px)]:flex-row flex-col items-center gap-2 md:gap-8 mx-auto mt-2">
                <div className="flex flex-col items-start gap-1 md:gap-3 w-[90%] [@media_(min-width:700px)]:w-1/2 md:w-3/5 h-full overflow-visible">
                  <Carousel
                    className="mx-auto w-full"
                    plugins={[plugin.current as any]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.play as any}
                    onTouchStart={plugin.current.stop}
                    onTouchEnd={plugin.current.play as any}
                  >
                    <CarouselContent>
                      {data.images.list.map((url) => (
                        <CarouselItem
                          key={url}
                          className={
                            data.images.list.length > 1
                              ? "basis-[90%]"
                              : "basis-full"
                          }
                        >
                          <Card className="p-0 md:p-0">
                            <CardContent className="flex justify-center items-center p-0 md:p-0">
                              <img
                                src={`${data.images.path}${url}`}
                                className="rounded-sm"
                                alt={data.title[language]}
                                loading="lazy"
                              />
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                  <div className="flex justify-between items-center w-full text-[11px] text-neutral-600 dark:text-neutral-400 md:text-xs">
                    <div className="flex items-center gap-1">
                      <LuClock4 />
                      <p>{data.date[language]}</p>
                    </div>
                    <div>#{data.tag}</div>
                  </div>
                </div>
                <div className="flex flex-col justify-around items-start gap-1.5 md:gap-3 w-full [@media_(min-width:700px)]:w-1/2 h-full text-base">
                  <div className="flex flex-col gap-[2px]">
                    <span className="font-bold text-sm md:text-base">
                      {
                        textVariants.others.labels.projects.modal.description[
                          language
                        ]
                      }
                      :
                    </span>
                    <p
                      className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base"
                      dangerouslySetInnerHTML={{
                        __html: data.description[language],
                      }}
                    />
                  </div>
                  <Separator />
                  <div className="flex justify-start items-center gap-2 w-full">
                    <span className="w-fit font-bold text-sm md:text-base">
                      {
                        textVariants.others.labels.projects.modal.stacks[
                          language
                        ]
                      }
                      :
                    </span>
                    <div
                      className={`tech flex h-8 w-2/3 items-center justify-center gap-1 ${showingOnTechContainer === "icons" ? "" : "flipped"}`}
                    >
                      <div className="relative flex justify-center items-center w-full h-full tech-inner">
                        <div className="absolute flex justify-start gap-2 w-full text-xl tech-front">
                          {projectStacks.map((stack) => (
                            <p key={stack.id}>
                              <stack.component
                                style={{ color: stack.color[theme] }}
                              />
                            </p>
                          ))}
                        </div>
                        <div className="absolute flex flex-wrap justify-start gap-2 gap-y-0 w-full font-medium md:text-[15px] text-sm tech-back">
                          {projectStacks.map((stack) => (
                            <p key={stack.id}>{stack.name}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-fit">
                      {showingOnTechContainer === "icons" ? (
                        <FiInfo
                          className="text-xl hover:cursor-pointer"
                          onClick={() => setShowingOnTechContainer("texts")}
                        />
                      ) : (
                        <FiXCircle
                          className="text-xl hover:cursor-pointer"
                          onClick={() => setShowingOnTechContainer("icons")}
                        />
                      )}
                    </div>
                  </div>
                  <Separator />
                  {data.repository && (
                    <>
                      <div className="flex flex-col items-start gap-[2px]">
                        <span className="font-bold text-sm md:text-base">
                          {
                            textVariants.others.labels.projects.modal.repo[
                              language
                            ]
                          }
                          :
                        </span>
                        <Link
                          variant="tertiary"
                          href={data.repository}
                          className="text-sm md:text-base"
                        >
                          {data.repository}
                          <FiLink />
                        </Link>
                      </div>
                      <Separator />
                    </>
                  )}
                  <div className="flex items-center gap-2 my-2 text-sm md:text-base">
                    <p>
                      {
                        textVariants.others.labels.projects.modal.complexity[
                          language
                        ]
                      }
                    </p>
                    <div className="flex items-center gap-1 text-base">
                      {complexityStars.map((item) => (
                        <div key={item.value}>
                          {item.value <= data.complexity ? (
                            <IoStarSharp className="text-black dark:text-white" />
                          ) : (
                            <IoStarSharp className="opacity-[.15]" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

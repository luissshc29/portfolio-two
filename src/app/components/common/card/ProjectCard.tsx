"use client";

import { Card, CardContent } from "@/shadcn/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
import { IoStarOutline, IoStarSharp } from "react-icons/io5";

export default function ProjectCard({
  data,
  language,
}: {
  data: Project;
  language: "br" | "us";
}) {
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
    document.getElementById("drawer-content")?.focus();
  }, [isDrawerOpen]);

  return (
    <div className="relative shadow-lg overflow-hidden card">
      <img
        src={`${data.images.path}${data.images.list[0]}`}
        alt={data.title[language]}
        className="w-full h-full transition-all duration-500 card-image ease-in-out object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 bg-black bg-opacity-50 opacity-0 p-2 font-semibold text-3xl text-white transition-all duration-500 card-overlay ease-in-out">
        <h1 className="font-title text-2xl semibold">{data.title[language]}</h1>

        {/* Desktop */}
        <Dialog onOpenChange={(e) => setHeaderVisible?.(!e)}>
          <DialogTrigger asChild className="lg:block hidden">
            <div className="lg:flex items-center gap-1 hidden font-text hover:cursor-pointer">
              <p className="font-medium text-base underline">
                {textVariants.others.labels.projects.card.text[language]}
              </p>
              <FiInfo className="text-base" />
            </div>
          </DialogTrigger>
          <DialogContent className="min-w-[85vw] max-h-[80vh]">
            <div className="z-[1500]">
              <DialogHeader>
                <DialogTitle className="font-title text-2xl">
                  {data.title[language]}
                </DialogTitle>
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
              </DialogHeader>
            </div>
            <div className="z-[1500] flex items-center gap-10 w-full h-full">
              <div className="flex flex-col items-start gap-[6px] w-1/2">
                <Carousel className="w-full">
                  <CarouselContent>
                    {data.images.list.map((url) => (
                      <CarouselItem key={url}>
                        <Card className="p-0 md:p-0">
                          <CardContent className="flex justify-center items-center p-0 md:p-0">
                            <img
                              src={`${data.images.path}${url}`}
                              className="rounded-sm"
                              alt={data.title[language]}
                            />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="flex justify-between items-center w-full text-neutral-600 text-xs md:text-sm dark:text-neutral-400">
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
                    <p className="text-neutral-700 dark:text-neutral-300">
                      {data.description[language]}
                    </p>
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
                        <div className="absolute flex justify-start gap-2 w-full tech-front text-2xl">
                          {projectStacks.map((stack) => (
                            <p key={stack.id}>{stack.component}</p>
                          ))}
                        </div>
                        <div className="absolute flex flex-wrap justify-start gap-x-2 w-full tech-back font-medium text-base">
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
                          <IoStarSharp className="opacity-20 dark:opacity-10" />
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
          disablePreventScroll={true}
        >
          <DrawerTrigger asChild className="block lg:hidden">
            <div className="flex items-center gap-1 lg:hidden hover:cursor-pointer">
              <p className="font-medium text-sm underline">
                {textVariants.others.labels.projects.card.text[language]}
              </p>
              <FiInfo className="text-base" />
            </div>
          </DrawerTrigger>
          <DrawerContent
            className="[touch-action:manipulation] [-webkit-overflow-scrolling:touch]"
            id="drawer-content"
          >
            <div className="z-[1500] mx-auto pt-4 pb-6 w-[90%] h-fit max-h-[70vh] overflow-scroll">
              <DrawerHeader className="gap-0 w-fit">
                <DrawerTitle className="font-title text-xl md:text-2xl">
                  {data.title[language]}
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
              <div className="z-[1500] flex md:flex-row flex-col items-center gap-2 md:gap-8 mt-2 w-full">
                <div className="flex flex-col items-start gap-1 md:gap-3 w-1/2 h-full">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {data.images.list.map((url) => (
                        <CarouselItem key={url}>
                          <Card className="p-0 md:p-0">
                            <CardContent className="flex justify-center items-center p-0 md:p-0">
                              <img
                                src={`${data.images.path}${url}`}
                                className="rounded-sm"
                                alt={data.title[language]}
                              />
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                  <div className="flex justify-between items-center w-full text-[11px] text-neutral-600 md:text-xs dark:text-neutral-400">
                    <div className="flex items-center gap-1">
                      <LuClock4 />
                      <p>{data.date[language]}</p>
                    </div>
                    <div>#{data.tag}</div>
                  </div>
                </div>
                <div className="flex flex-col justify-around items-start gap-1.5 md:gap-3 w-full md:w-1/2 h-full text-base">
                  <div className="flex flex-col gap-[2px]">
                    <span className="font-bold text-sm md:text-base">
                      {
                        textVariants.others.labels.projects.modal.description[
                          language
                        ]
                      }
                      :
                    </span>
                    <p className="text-neutral-700 text-sm md:text-base dark:text-neutral-300">
                      {data.description[language]}
                    </p>
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
                        <div className="absolute flex justify-start gap-2 w-full tech-front text-xl">
                          {projectStacks.map((stack) => (
                            <p key={stack.id}>{stack.component}</p>
                          ))}
                        </div>
                        <div className="absolute flex flex-wrap justify-start gap-2 gap-y-0 w-full tech-back font-medium text-sm md:text-[15px]">
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
                  )}
                  <Separator />
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
                            <IoStarSharp className="opacity-20 dark:opacity-10" />
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

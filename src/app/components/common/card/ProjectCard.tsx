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
    <div className="card relative overflow-hidden shadow-lg">
      <img
        src={`${data.images.path}${data.images.list[0]}`}
        alt={data.title[language]}
        className="card-image h-full w-full object-cover transition-all duration-500 ease-in-out"
        loading="lazy"
      />
      <div className="card-overlay absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black bg-opacity-50 p-2 text-3xl font-semibold text-white opacity-0 transition-all duration-500 ease-in-out">
        <h1 className="semibold font-title text-2xl">{data.title[language]}</h1>

        {/* Desktop */}
        <Dialog onOpenChange={(e) => setHeaderVisible?.(!e)}>
          <DialogTrigger asChild className="hidden lg:block">
            <div className="hidden items-center gap-1 font-text hover:cursor-pointer lg:flex">
              <p className="text-base font-medium underline">
                {textVariants.others.labels.projects.card.text[language]}
              </p>
              <FiInfo className="text-base" />
            </div>
          </DialogTrigger>
          <DialogContent className="max-h-[80vh] min-w-[85vw]">
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
            <div className="z-[1500] flex h-full w-full items-center gap-10">
              <div className="flex w-1/2 flex-col items-start gap-[6px]">
                <Carousel className="w-full">
                  <CarouselContent>
                    {data.images.list.map((url) => (
                      <CarouselItem key={url}>
                        <Card className="p-0 md:p-0">
                          <CardContent className="flex items-center justify-center p-0 md:p-0">
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
                <div className="flex w-full items-center justify-between text-xs text-neutral-600 dark:text-neutral-400 md:text-sm">
                  <div className="flex items-center gap-2">
                    <LuClock4 />
                    <p>{data.date[language]}</p>
                  </div>
                  <div>#{data.tag}</div>
                </div>
              </div>
              <div className="flex h-full w-1/2 flex-col items-start justify-around">
                <div className="flex w-full flex-col items-start justify-center gap-3 text-base">
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
                  <div className="flex w-full items-center justify-start gap-2">
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
                      <div className="tech-inner relative flex h-full w-full items-center justify-center">
                        <div className="tech-front absolute flex w-full justify-start gap-2 text-2xl">
                          {projectStacks.map((stack) => (
                            <p key={stack.id}>{stack.component}</p>
                          ))}
                        </div>
                        <div className="tech-back absolute flex w-full flex-wrap justify-start gap-x-2 text-base font-medium">
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
          disablePreventScroll={true}
        >
          <DrawerTrigger asChild className="block lg:hidden">
            <div className="flex items-center gap-1 hover:cursor-pointer lg:hidden">
              <p className="text-sm font-medium underline">
                {textVariants.others.labels.projects.card.text[language]}
              </p>
              <FiInfo className="text-base" />
            </div>
          </DrawerTrigger>
          <DrawerContent
            className="[-webkit-overflow-scrolling:touch] [touch-action:manipulation]"
            id="drawer-content"
          >
            <div className="z-[1500] mx-auto h-fit max-h-[70vh] w-[90%] overflow-scroll pb-6 pt-4">
              <DrawerHeader className="w-fit gap-0">
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
              <div className="z-[1500] mt-2 flex w-full flex-col items-center gap-2 md:flex-row md:gap-8">
                <div className="flex h-full w-1/2 flex-col items-start gap-1 md:gap-3">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {data.images.list.map((url) => (
                        <CarouselItem key={url}>
                          <Card className="p-0 md:p-0">
                            <CardContent className="flex items-center justify-center p-0 md:p-0">
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
                  <div className="flex w-full items-center justify-between text-[11px] text-neutral-600 dark:text-neutral-400 md:text-xs">
                    <div className="flex items-center gap-1">
                      <LuClock4 />
                      <p>{data.date[language]}</p>
                    </div>
                    <div>#{data.tag}</div>
                  </div>
                </div>
                <div className="flex h-full w-full flex-col items-start justify-around gap-1.5 text-base md:w-1/2 md:gap-3">
                  <div className="flex flex-col gap-[2px]">
                    <span className="text-sm font-bold md:text-base">
                      {
                        textVariants.others.labels.projects.modal.description[
                          language
                        ]
                      }
                      :
                    </span>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 md:text-base">
                      {data.description[language]}
                    </p>
                  </div>
                  <Separator />
                  <div className="flex w-full items-center justify-start gap-2">
                    <span className="w-fit text-sm font-bold md:text-base">
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
                      <div className="tech-inner relative flex h-full w-full items-center justify-center">
                        <div className="tech-front absolute flex w-full justify-start gap-2 text-xl">
                          {projectStacks.map((stack) => (
                            <p key={stack.id}>{stack.component}</p>
                          ))}
                        </div>
                        <div className="tech-back absolute flex w-full flex-wrap justify-start gap-2 gap-y-0 text-sm font-medium md:text-[15px]">
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
                      <span className="text-sm font-bold md:text-base">
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
                  <div className="my-2 flex items-center gap-2 text-sm md:text-base">
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

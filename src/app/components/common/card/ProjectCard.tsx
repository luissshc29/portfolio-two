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
import React, { useState } from "react";
import { FiEye, FiEyeOff, FiInfo, FiLink } from "react-icons/fi";
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

type ProjectType = (typeof textVariants.sections.projects.list)[0];

export default function ProjectCard({
  data,
  language,
}: {
  data: ProjectType;
  language: "br" | "us";
}) {
  const [showingOnTechContainer, setShowingOnTechContainer] = useState<
    "icons" | "texts"
  >("icons");

  const projectStacks = stacks.filter((s) => data.stacks.includes(s.id));

  return (
    <div className="relative shadow-lg overflow-hidden card">
      <img
        src={`${data.images.path}${data.images.list[0]}`}
        alt={data.title[language]}
        className="w-full h-full transition-all duration-500 card-image ease-in-out object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 bg-black bg-opacity-50 opacity-0 p-2 font-semibold text-3xl text-white transition-all duration-500 card-overlay ease-in-out">
        <h1 className="font-title text-xl semibold">{data.title[language]}</h1>

        {/* Desktop */}
        <Dialog>
          <DialogTrigger asChild className="lg:block hidden">
            <div className="lg:flex items-center gap-1 hidden font-text hover:cursor-pointer">
              <p className="font-medium text-sm underline">
                {textVariants.others.labels.projects.card.text[language]}
              </p>
              <FiInfo className="text-base" />
            </div>
          </DialogTrigger>
          <DialogContent className="min-w-[85vw] max-h-[80vh]">
            <div className="z-[1500]">
              <DialogHeader>
                <DialogTitle className="font-title text-xl">
                  {data.title[language]}
                </DialogTitle>
                <DialogDescription>
                  <Link variant="tertiary" href={data.url}>
                    {data.url}
                    <FiLink />
                  </Link>
                </DialogDescription>
              </DialogHeader>
            </div>
            <div className="z-[1500] flex items-center gap-10 w-full h-full">
              <div className="flex flex-col items-start gap-4 w-1/2">
                <Carousel className="w-full">
                  <CarouselContent>
                    {data.images.list.map((url) => (
                      <CarouselItem key={url}>
                        <Card className="p-0 md:p-0">
                          <CardContent className="flex justify-center items-center p-0 md:p-0">
                            <img
                              src={`${data.images.path}${url}`}
                              className="rounded-sm"
                            />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="flex items-center gap-2 text-neutral-400 text-xs md:text-sm">
                  <LuClock4 />
                  <p className="">{data.date[language]}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-3 w-[calc(50%-2.5rem)] h-full text-base">
                <div className="flex flex-col gap-1">
                  <span className="font-bold">
                    {
                      textVariants.others.labels.projects.modal.description[
                        language
                      ]
                    }
                    :
                  </span>
                  <p className="text-neutral-200 text-sm">
                    {data.description[language]}
                  </p>
                </div>
                <Separator />
                <div className="flex justify-between items-center gap-2 w-full">
                  <span className="w-fit font-bold">
                    {textVariants.others.labels.projects.modal.stacks[language]}
                    :
                  </span>
                  <div
                    className={`tech flex h-8 w-2/3 items-center justify-center gap-1 ${showingOnTechContainer === "icons" ? "" : "flipped"}`}
                  >
                    <div className="relative flex justify-center items-center w-full h-full tech-inner">
                      <div className="absolute flex justify-evenly gap-2 tech-front text-xl">
                        {projectStacks.map((stack) => (
                          <>{stack.component}</>
                        ))}
                      </div>
                      <div className="absolute flex flex-wrap justify-center gap-2 w-full tech-back font-medium text-sm">
                        {projectStacks.map((stack) => (
                          <p>{stack.name}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-fit">
                    {showingOnTechContainer === "icons" ? (
                      <FiEye
                        className="hover:cursor-pointer"
                        onClick={() => setShowingOnTechContainer("texts")}
                      />
                    ) : (
                      <FiEyeOff
                        className="hover:cursor-pointer"
                        onClick={() => setShowingOnTechContainer("icons")}
                      />
                    )}
                  </div>
                </div>
                <Separator />
                {data.repository && (
                  <div className="flex items-center gap-1">
                    <span className="font-bold">
                      {textVariants.others.labels.projects.modal.repo[language]}
                      :
                    </span>
                    <Link variant="tertiary" href={data.repository}>
                      {data.repository}
                      <FiLink />
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <DialogFooter></DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Mobile */}
        <Drawer>
          <DrawerTrigger asChild className="block lg:hidden">
            <div className="flex items-center gap-1 lg:hidden hover:cursor-pointer">
              <p className="font-medium text-sm underline">
                {textVariants.others.labels.projects.card.text[language]}
              </p>
              <FiInfo className="text-base" />
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <div className="z-[150] mx-auto w-[90%] min-h-[80vh]">
              <DrawerHeader className="gap-1">
                <DrawerTitle className="font-title text-xl">
                  {data.title[language]}
                </DrawerTitle>
                <DrawerDescription>
                  <Link variant="tertiary" href={data.url}>
                    {data.url}
                    <FiLink />
                  </Link>
                </DrawerDescription>
              </DrawerHeader>
              <div className="z-[150] flex md:flex-row flex-col items-center gap-2 md:gap-8 mt-2 w-full">
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
                              />
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                  <div className="flex items-center gap-1 text-[10px] text-neutral-400 md:text-xs">
                    <LuClock4 />
                    <p>{data.date[language]}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-1.5 md:gap-3 w-full md:w-1/2 h-full text-base">
                  <div className="flex flex-col gap-[2px] text-sm">
                    <span className="font-bold">
                      {
                        textVariants.others.labels.projects.modal.description[
                          language
                        ]
                      }
                      :
                    </span>
                    <p className="text-neutral-200 text-xs">
                      {data.description[language]}
                    </p>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center gap-2 w-full">
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
                        <div className="absolute flex justify-evenly gap-2 tech-front text-xl">
                          {projectStacks.map((stack) => (
                            <>{stack.component}</>
                          ))}
                        </div>
                        <div className="absolute flex flex-wrap justify-center gap-1 w-full tech-back text-xs">
                          {projectStacks.map((stack) => (
                            <p>{stack.name}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-fit">
                      {showingOnTechContainer === "icons" ? (
                        <FiEye
                          className="hover:cursor-pointer"
                          onClick={() => setShowingOnTechContainer("texts")}
                        />
                      ) : (
                        <FiEyeOff
                          className="hover:cursor-pointer"
                          onClick={() => setShowingOnTechContainer("icons")}
                        />
                      )}
                    </div>
                  </div>
                  <Separator />
                  {data.repository && (
                    <div className="flex flex-col items-start gap-1">
                      <span className="font-bold text-sm">
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
                        className="text-xs"
                      >
                        {data.repository}
                        <FiLink />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

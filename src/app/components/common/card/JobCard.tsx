import { textVariants } from "@/utils/constants/textVariants";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";
import { Separator } from "@/shadcn/components/ui/separator";
import { LuClock4 } from "react-icons/lu";

type JobType = (typeof textVariants.sections.experience.jobs)[0];

export default function JobCard({
  data,
  language,
}: {
  data: JobType;
  language: "br" | "us";
}) {
  return (
    <Card key={data.id} className="flex flex-col justify-between w-full">
      <CardHeader className="flex flex-row justify-between items-center">
        <div className="flex flex-col justify-center gap-1 w-fit">
          <CardTitle>{data.function[language]}</CardTitle>
          <CardDescription>{data.company[language]}</CardDescription>
        </div>
        <img
          src={data.logo}
          className="rounded-sm w-1/6 md:w-[10%] lg:w-1/6"
          alt={data.company[language]}
        />
      </CardHeader>
      <Separator className="bg-neutral-800 mx-auto mb-4 w-[calc(100%-2rem)] md:w-[calc(100%-3rem)]" />
      <CardContent>
        <div>
          <p className="text-sm lg:text-base">{data.description[language]}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-auto mb-0 w-full">
        <div className="flex items-center gap-1 text-neutral-400">
          <LuClock4 />
          <p className="text-sm">{data.date[language]}</p>
        </div>
        <div className="text-xl">{data.icon}</div>
      </CardFooter>
    </Card>
  );
}

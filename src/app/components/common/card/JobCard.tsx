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
import { Job } from "@/utils/types/Job";

export default function JobCard({
  data,
  language,
}: {
  data: Job;
  language: "br" | "us";
}) {
  return (
    <Card
      key={data.id}
      className="job_card flex w-full flex-col justify-between border-none"
    >
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex w-fit flex-col justify-center gap-1">
          <CardTitle>{data.function[language]}</CardTitle>
          <CardDescription>{data.company[language]}</CardDescription>
        </div>
        <img
          src={data.logo}
          className="w-1/6 rounded-sm md:w-[10%] lg:w-1/6"
          alt={data.company[language]}
          loading="lazy"
        />
      </CardHeader>
      <Separator className="mx-auto mb-4 w-[calc(100%-2rem)] bg-neutral-800 md:w-[calc(100%-3rem)]" />
      <CardContent>
        <div>
          <p className="text-sm lg:text-base">{data.description[language]}</p>
        </div>
      </CardContent>
      <CardFooter className="mb-0 mt-auto flex w-full items-center justify-between p-4">
        <div className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400">
          <LuClock4 />
          <p className="text-xs md:text-sm">{data.date[language]}</p>
        </div>
        <div className="text-xl">{data.icon}</div>
      </CardFooter>
    </Card>
  );
}

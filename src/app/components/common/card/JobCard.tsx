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
      className="flex flex-col justify-between border-none w-full job_card"
    >
      <CardHeader className="flex flex-row justify-between items-center">
        <div className="flex flex-col justify-center gap-1 w-fit">
          <CardTitle>{data.function[language]}</CardTitle>
          <CardDescription>{data.company[language]}</CardDescription>
        </div>
        <img
          src={data.logo}
          className="rounded-sm w-1/6 md:w-[10%] lg:w-1/6"
          alt={data.company[language]}
          loading="lazy"
        />
      </CardHeader>
      <Separator className="bg-neutral-800 mx-auto mb-4 w-[calc(100%-2rem)] md:w-[calc(100%-3rem)]" />
      <CardContent>
        <ul className="flex flex-col gap-2">
          {data.description.map((t) => (
            <li className="flex items-start gap-1 text-sm lg:text-base">
              <span>•</span> {t[language]}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-auto mb-0 p-4 w-full">
        <div className="flex items-center gap-1 text-neutral-600 dark:text-neutral-400">
          <LuClock4 />
          <p className="text-xs md:text-sm">{data.date[language]}</p>
        </div>
        <div className="text-xl md:text-2xl">{data.icon}</div>
      </CardFooter>
    </Card>
  );
}

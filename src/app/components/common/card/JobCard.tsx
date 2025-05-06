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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shadcn/components/ui/accordion";
import { textVariants } from "@/utils/constants/textVariants";
import { FiInfo } from "react-icons/fi";

export default function JobCard({
  data,
  language,
  className,
  style,
  ...rest
}: {
  data: Job;
  language: "br" | "us";
} & React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement>) {
  return (
    <div
      className="animate-content-up opacity-0"
      style={{
        ...style,
      }}
      {...rest}
    >
      <Card
        key={data.id}
        className={`job_card flex w-full break-inside-avoid flex-col justify-between gap-0 border-none ${className}`}
      >
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <div className="flex w-fit flex-col justify-items-start gap-2 text-left">
            <CardTitle>{data.function[language]}</CardTitle>
            <CardDescription>{data.company[language]}</CardDescription>
            <div className="mb-0 mt-2 flex w-full items-center justify-between">
              <div className="flex h-fit items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400 md:text-sm">
                <LuClock4 />
                <p>{data.date[language]}</p>
              </div>
              {/* <div className="text-xl">{data.icon}</div> */}
            </div>
          </div>
          <img
            src={data.logo}
            className="w-1/6 rounded-sm md:w-[10%] lg:w-1/6"
            alt={data.company[language]}
            loading="lazy"
          />
        </CardHeader>
        <Separator className="mx-auto my-2 w-[calc(100%-2rem)] bg-neutral-800 md:w-[calc(100%-3rem)]" />
        <Accordion type="multiple" className="w-full">
          <AccordionItem value={`item-${data.id}`} className="border-none">
            <AccordionTrigger className="p-4 pb-6 pt-2 md:p-6">
              <div className="flex h-fit items-center gap-1.5 text-sm lg:text-base">
                <FiInfo />{" "}
                <span>
                  {textVariants.others.labels.jobs.accordion[language]}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="py-0">
              <CardContent className="pt-0 md:pt-0">
                <ul className="flex flex-col gap-2 text-left">
                  {data.description.map((t) => (
                    <li
                      className="flex items-start gap-1 text-sm lg:text-base"
                      key={t.id}
                    >
                      <span>•</span> {t[language]}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  );
}

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
      className="opacity-0 w-full animate-content-up"
      style={{
        ...style,
      }}
      {...rest}
    >
      <Card
        key={data.id}
        className={`job_card flex w-full break-inside-avoid flex-col justify-between gap-0 border-none ${className}`}
      >
        <CardHeader className="flex flex-row justify-between items-start gap-2">
          <div className="flex flex-col justify-items-start gap-2 text-left">
            <CardTitle>{data.function[language]}</CardTitle>
            <CardDescription>{data.company[language]}</CardDescription>
            <div className="flex justify-between items-center mt-2 mb-0 w-full">
              <div className="flex items-center gap-1 h-fit text-neutral-600 dark:text-neutral-400 text-xs md:text-sm">
                <LuClock4 />
                <p>{data.date.text[language]}</p>
              </div>
              {/* <div className="text-xl">{data.icon}</div> */}
            </div>
          </div>
          <img
            src={data.logo}
            className="rounded-sm w-1/5 md:w-[15%] lg:w-1/5"
            alt={data.company[language]}
            loading="lazy"
          />
        </CardHeader>
        <Separator className="bg-neutral-800 mx-auto my-2 w-[calc(100%-2rem)] md:w-[calc(100%-3rem)]" />
        <Accordion
          type="multiple"
          className="disabled:opacity-80 w-full"
          disabled={data.description.length === 0}
        >
          <AccordionItem value={`item-${data.id}`} className="border-none">
            <AccordionTrigger
              className="p-4 md:p-6 pt-2 pb-6 disabled:text-neutral-300 dark:disabled:text-neutral-600 disabled:hover:[text-decoration:none]"
              disabled={data.description.length === 0}
            >
              <div className="flex items-center gap-1.5 h-fit text-xs md:text-sm lg:text-base">
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

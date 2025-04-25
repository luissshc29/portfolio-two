"use client";

import React, { Fragment } from "react";
import BgImageContainer from "../components/common/BgImageContainer";
import Title from "../components/common/Title";
import { textVariants } from "@/utils/constants/textVariants";
import { useLanguageContext } from "@/utils/context/LanguageContext";
import JobCard from "../components/common/card/JobCard";

export default function Experience() {
  const { language } = useLanguageContext();
  const jobs = textVariants.sections.experience.jobs;

  const leftColumn = jobs.filter((_, index) => index % 2 === 0);
  const rightColumn = jobs.filter((_, index) => index % 2 !== 0);

  return (
    <BgImageContainer
      darkImgSrc="/images/background/dark/experience-bg-img.jpg"
      lightImgSrc="/images/background/light/experience-bg-img.jpg"
      id="experience"
    >
      <Title
        mainText={textVariants.sections.experience.title.main[language]}
        bgText={textVariants.sections.experience.title.bg[language]}
      />
      <div className="flex flex-col gap-4 text-left lg:flex-row lg:gap-6">
        <div className="flex w-full flex-col gap-4 lg:w-1/2">
          {leftColumn.map((job) => (
            <JobCard key={job.id} data={job} language={language} />
          ))}
        </div>
        <div className="flex w-full flex-col gap-4 lg:w-1/2">
          {rightColumn.map((job) => (
            <JobCard key={job.id} data={job} language={language} />
          ))}
        </div>
      </div>
    </BgImageContainer>
  );
}

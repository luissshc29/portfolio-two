"use client";

import React from "react";
import BgImageContainer from "../components/common/BgImageContainer";
import Title from "../components/common/Title";
import { textVariants } from "@/utils/constants/textVariants";
import { useLanguageContext } from "@/utils/context/LanguageContext";
import JobCard from "../components/common/card/JobCard";

export default function Experience() {
  const { language } = useLanguageContext();

  return (
    <BgImageContainer
      src="/images/background/experience-bg-img.jpg"
      id="experience"
    >
      <Title
        mainText={textVariants.sections.experience.title.main[language]}
        bgText={textVariants.sections.experience.title.bg[language]}
      />
      <div className="flex flex-col justify-evenly gap-4 text-left lg:flex-row">
        {textVariants.sections.experience.jobs.map((job) => (
          <JobCard key={job.id} data={job} language={language} />
        ))}
      </div>
    </BgImageContainer>
  );
}

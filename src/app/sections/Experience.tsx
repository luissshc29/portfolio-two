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
      darkImgSrc="/images/background/dark/experience-bg-img.jpg"
      lightImgSrc="/images/background/light/experience-bg-img.jpg"
      id="experience"
      slideAnimationDirecion="right"
    >
      <Title
        mainText={textVariants.sections.experience.title.main[language]}
        bgText={textVariants.sections.experience.title.bg[language]}
      />
      <div className="justify-evenly gap-4 grid grid-cols-1 lg:grid-cols-2 text-left">
        {textVariants.sections.experience.jobs.map((job) => (
          <JobCard key={job.id} data={job} language={language} />
        ))}
      </div>
    </BgImageContainer>
  );
}

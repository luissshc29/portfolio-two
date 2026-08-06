"use client";

import React, { Fragment } from "react";
import BgImageContainer from "../components/common/BgImageContainer";
import Title from "../components/common/Title";
import { textVariants } from "@/utils/constants/textVariants";
import { useLanguageContext } from "@/utils/context/LanguageContext";
import JobCard from "../components/common/card/JobCard";
import Masonry from "react-masonry-css";

export default function Experience() {
  const { language } = useLanguageContext();
  const jobs = textVariants.sections.experience.jobs;

  const breakpointColumns = {
    default: 3,
    1200: 2,
    850: 1,
  };

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
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex gap-6"
        columnClassName="flex flex-col gap-6"
      >
        {jobs
          .sort(
            (a, b) =>
              b.date.values.startDate.getTime() -
              a.date.values.startDate.getTime(),
          )
          .map((job, index) => (
            <React.Fragment key={`${job.id}-${index}`}>
              <JobCard
                data={job}
                language={language}
                style={{
                  animationDelay: `${100 * index}ms`,
                }}
              />
            </React.Fragment>
          ))}
      </Masonry>
    </BgImageContainer>
  );
}

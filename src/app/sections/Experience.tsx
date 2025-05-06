"use client";

import React, { Fragment } from "react";
import BgImageContainer from "../components/common/BgImageContainer";
import Title from "../components/common/Title";
import { textVariants } from "@/utils/constants/textVariants";
import { useLanguageContext } from "@/utils/context/LanguageContext";
import JobCard from "../components/common/card/JobCard";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  const { language } = useLanguageContext();
  const jobs = textVariants.sections.experience.jobs;
  const { ref, inView } = useInView();

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
      <div
        className="flex flex-col gap-4 text-left lg:flex-row lg:gap-6"
        ref={ref}
      >
        {inView ? (
          <>
            <div className="flex w-full flex-col gap-4 lg:w-1/2">
              {leftColumn.map((job, index) => (
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
            </div>
            <div className="flex w-full flex-col gap-4 lg:w-1/2">
              {rightColumn.map((job, index) => (
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
            </div>
          </>
        ) : (
          <>
            <div className="flex w-full flex-col gap-4 opacity-0 lg:w-1/2">
              {leftColumn.map((job) => (
                <JobCard key={job.id} data={job} language={language} />
              ))}
            </div>
            <div className="flex w-full flex-col gap-4 lg:w-1/2">
              {rightColumn.map((job) => (
                <JobCard data={job} key={job.id} language={language} />
              ))}
            </div>
          </>
        )}
      </div>
    </BgImageContainer>
  );
}

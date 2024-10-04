"use client";

import React from "react";
import BgImageContainer from "../components/common/BgImageContainer";
import Title from "../components/common/Title";
import { useLanguageContext } from "@/utils/context/LanguageContext";
import { textVariants } from "@/utils/constants/textVariants";
import Link from "../components/common/Link";
import { FaGithub } from "react-icons/fa6";
import ProjectCard from "../components/common/card/ProjectCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shadcn/components/ui/tabs";

export default function Projects() {
  const { language } = useLanguageContext();

  return (
    <BgImageContainer
      darkImgSrc="/images/background/dark/projects-bg-img.jpg"
      lightImgSrc="/images/background/light/projects-bg-img.jpg"
      id="projects"
    >
      <Title
        mainText={textVariants.sections.projects.title.main[language]}
        bgText={textVariants.sections.projects.title.bg[language]}
      />
      <p className="text-sm md:text-base">
        {textVariants.sections.projects.subtitle[language]}
      </p>

      <Tabs defaultValue="all" className="w-fit">
        <TabsList className="grid grid-cols-4 grid-row-1 mb-5 p-1 w-full h-fit">
          {textVariants.sections.projects.tabs.map((t) => (
            <TabsTrigger
              key={t.id}
              value={t.value}
              className="text-[13px] md:text-base"
            >
              {t.text[language]}
            </TabsTrigger>
          ))}
        </TabsList>
        {textVariants.sections.projects.tabs.map((t) => (
          <TabsContent value={t.value} key={t.id}>
            <div className="flex flex-col justify-start md:justify-evenly items-center gap-2 md:grid md:grid-cols-2 lg:grid-cols-3 opacity-100 mx-auto w-[90vw] min-h-[65vh] animate-show-up [animation-duration:350ms] md:min-h-[40vh]">
              {t.value === "all"
                ? textVariants.sections.projects.list.map((proj) => (
                    <ProjectCard
                      key={proj.id}
                      data={proj}
                      language={language}
                    />
                  ))
                : textVariants.sections.projects.list
                    .filter((p) => p.tag === t.value)
                    .map((proj) => (
                      <ProjectCard
                        key={proj.id}
                        data={proj}
                        language={language}
                      />
                    ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <div className="flex justify-center items-center gap-1 text-sm md:text-base">
        <p>{textVariants.sections.projects.caption[language]}</p>
        <Link variant="secondary" href="https://github.com/luissshc29">
          <p>GitHub</p>
          <FaGithub />
        </Link>
      </div>
    </BgImageContainer>
  );
}

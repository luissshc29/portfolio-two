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
import { Alert, AlertTitle } from "@/shadcn/components/ui/alert";
import { FiInfo } from "react-icons/fi";

export default function Projects() {
  const { language } = useLanguageContext();

  return (
    <BgImageContainer
      darkImgSrc="/images/background/dark/projects-bg-img.jpg"
      lightImgSrc="/images/background/light/projects-bg-img.jpg"
      id="projects"
      slideAnimation="left"
    >
      <Title
        mainText={textVariants.sections.projects.title.main[language]}
        bgText={textVariants.sections.projects.title.bg[language]}
      />
      <p className="flex w-fit items-center gap-2 text-left text-sm md:text-base">
        {textVariants.sections.projects.subtitle[language]}
      </p>

      <Tabs defaultValue="all" className="w-fit">
        <TabsList className="grid-row-1 mb-5 grid h-fit w-full grid-cols-4 p-1">
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
            <div className="mx-auto flex min-h-[65vh] w-[90vw] animate-show-up flex-col items-center justify-start gap-2 opacity-100 [animation-duration:350ms] md:grid md:min-h-[40vh] md:grid-cols-2 md:justify-evenly lg:grid-cols-3">
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
      <Alert className="w-fit">
        <AlertTitle className="flex items-center justify-center gap-1 text-sm md:text-base">
          <FiInfo className="text-lg" />
          <p>{textVariants.sections.projects.caption[language]}</p>
          <Link variant="secondary" href="https://github.com/luissshc29">
            <p>GitHub</p>
            <FaGithub />
          </Link>
        </AlertTitle>
      </Alert>
    </BgImageContainer>
  );
}

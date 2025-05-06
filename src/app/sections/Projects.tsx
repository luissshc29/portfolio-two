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
import { useTheme } from "next-themes";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { language } = useLanguageContext();
  const { resolvedTheme } = useTheme();
  const { ref, inView } = useInView();

  const projects = [
    ...textVariants.sections.projects.list.filter((item) => item.highlight),
    ...textVariants.sections.projects.list.filter((item) => !item.highlight),
  ];

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
      <p className="flex w-fit items-center gap-2 text-left text-sm md:text-base">
        {textVariants.sections.projects.subtitle[language]}
      </p>
      <div ref={ref}>
        <Tabs defaultValue="all" className="w-full">
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
              <div className="mx-auto flex min-h-[65vh] w-[90vw] flex-col items-center justify-start gap-2 opacity-100 [animation-duration:350ms] md:grid md:min-h-[40vh] md:grid-cols-2 md:justify-evenly lg:grid-cols-3">
                {inView ? (
                  t.value === "all" ? (
                    projects.map((proj, index) => (
                      <React.Fragment key={`${proj.id}-${index}`}>
                        <ProjectCard
                          data={proj}
                          language={language}
                          theme={resolvedTheme as "light" | "dark"}
                          style={{
                            animationDelay: `${100 * index}ms`,
                          }}
                        />
                      </React.Fragment>
                    ))
                  ) : (
                    projects
                      .filter((p) => p.tag === t.value)
                      .map((proj, index) => (
                        <React.Fragment key={`${proj.id}-${index}`}>
                          <ProjectCard
                            data={proj}
                            language={language}
                            theme={resolvedTheme as "light" | "dark"}
                            style={{
                              animationDelay: `${100 * index}ms`,
                            }}
                          />
                        </React.Fragment>
                      ))
                  )
                ) : (
                  <div className="h-screen w-full"></div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

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

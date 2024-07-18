"use client";

import React from "react";
import BgImageContainer from "../components/common/BgImageContainer";
import Title from "../components/common/Title";
import { useLanguageContext } from "@/utils/context/Language";
import { textVariants } from "@/utils/constants/textVariants";
import Link from "../components/common/Link";
import { FaGithub } from "react-icons/fa6";
import ProjectCard from "../components/common/card/ProjectCard";

export default function Projects() {
  const { language } = useLanguageContext();

  return (
    <BgImageContainer
      src="/images/background/projects-bg-img.jpg"
      id="projects"
    >
      <Title
        mainText={textVariants.sections.projects.title.main[language]}
        bgText={textVariants.sections.projects.title.bg[language]}
      />
      <p className="text-sm md:text-base">
        {textVariants.sections.projects.subtitle[language]}
      </p>
      <div className="grid w-full grid-cols-1 items-center justify-evenly gap-2 md:grid-cols-2 lg:grid-cols-3">
        {textVariants.sections.projects.list.map((proj) => (
          <ProjectCard key={proj.id} data={proj} language={language} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-1 text-sm md:text-base">
        <p>{textVariants.sections.projects.caption[language]}</p>
        <Link variant="secondary" href="https://github.com/luissshc29">
          <p>GitHub</p>
          <FaGithub />
        </Link>
      </div>
    </BgImageContainer>
  );
}

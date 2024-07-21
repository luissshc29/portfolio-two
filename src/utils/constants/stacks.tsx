import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  SiApollographql,
  SiGit,
  SiGraphql,
  SiNextdotjs,
  SiRecoil,
  SiTailwindcss,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { Stack } from "../types/Stack";
import { IoLogoSass } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";

export const stacks: Stack[] = [
  {
    id: 1,
    name: "HTML",
    component: <BiLogoHtml5 className="h-full w-full" color="#fc6203" />,
  },
  {
    id: 2,
    name: "CSS",
    component: <BiLogoCss3 className="h-full w-full" color="#0349fc" />,
  },
  {
    id: 3,
    name: "Sass",
    component: <IoLogoSass className="h-full w-full" color="#fc03c6" />,
  },
  {
    id: 4,
    name: "TailwindCSS",
    component: (
      <SiTailwindcss className="h-full w-full text-[#34c4cc] dark:text-[#03f2ff]" />
    ),
  },
  {
    id: 5,
    name: "Javascript",
    component: (
      <BiLogoJavascript className="h-full w-full text-[#e6bf00] dark:text-[#fcd303]" />
    ),
  },
  {
    id: 6,
    name: "Typescript",
    component: <BiLogoTypescript className="h-full w-full" color="#4466fc" />,
  },
  {
    id: 7,
    name: "React",
    component: (
      <RiReactjsLine className="h-full w-full text-[#34c4cc] dark:text-[#03f2ff]" />
    ),
  },
  {
    id: 8,
    name: "Recoil",
    component: (
      <SiRecoil className="h-full w-full text-black dark:text-white" />
    ),
  },
  {
    id: 9,
    name: "Redux",
    component: <BiLogoRedux className="h-full w-full" color="#9d03fc" />,
  },
  {
    id: 10,
    name: "Next.js",
    component: (
      <SiNextdotjs className="h-full w-full text-black dark:text-white" />
    ),
  },
  {
    id: 11,
    name: "MySQL",
    component: (
      <GrMysql className="h-full w-full text-[#34c4cc] dark:text-[#03f2ff]" />
    ),
  },
  {
    id: 12,
    name: "GraphQL",
    component: <SiGraphql className="h-full w-full" color="#e535ab" />,
  },
  {
    id: 13,
    name: "Apollo",
    component: <SiApollographql className="h-full w-full" color="#2822f0" />,
  },
  {
    id: 14,
    name: "Git",
    component: <SiGit className="h-full w-full" color="#fc6203" />,
  },
];

import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
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

export const stacks: Stack[] = [
  {
    id: 1,
    name: "HTML",
    component: <BiLogoHtml5 className="w-full h-full" color="#fc6203" />,
  },
  {
    id: 2,
    name: "CSS",
    component: <BiLogoCss3 className="w-full h-full" color="#0349fc" />,
  },
  {
    id: 3,
    name: "Sass",
    component: <IoLogoSass className="w-full h-full" color="#fc03c6" />,
  },
  {
    id: 4,
    name: "TailwindCSS",
    component: <SiTailwindcss className="w-full h-full" color="#00c8ff" />,
  },
  {
    id: 5,
    name: "Javascript",
    component: <BiLogoJavascript className="w-full h-full" color="#fcd303" />,
  },
  {
    id: 6,
    name: "Typescript",
    component: <BiLogoTypescript className="w-full h-full" color="#4466fc" />,
  },
  {
    id: 7,
    name: "React",
    component: <BiLogoReact className="w-full h-full" color="#03f2ff" />,
  },
  {
    id: 8,
    name: "Recoil",
    component: <SiRecoil className="w-full h-full" color="#ffffff" />,
  },
  {
    id: 9,
    name: "Redux",
    component: <BiLogoRedux className="w-full h-full" color="#9d03fc" />,
  },
  {
    id: 10,
    name: "Next.js",
    component: <SiNextdotjs className="w-full h-full" color="#ffffff" />,
  },
  {
    id: 11,
    name: "MySQL",
    component: <GrMysql className="w-full h-full" color="#00c8ff" />,
  },
  {
    id: 12,
    name: "GraphQL",
    component: <SiGraphql className="w-full h-full" color="#e535ab" />,
  },
  {
    id: 13,
    name: "Apollo",
    component: <SiApollographql className="w-full h-full" color="#2822f0" />,
  },
  {
    id: 14,
    name: "Git",
    component: <SiGit className="w-full h-full" color="#fc6203" />,
  },
];

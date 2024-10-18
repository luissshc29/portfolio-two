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
    url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    component: <BiLogoHtml5 className="w-full h-full" color="#fc6203" />,
  },
  {
    id: 2,
    name: "CSS",
    url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    component: <BiLogoCss3 className="w-full h-full" color="#0349fc" />,
  },
  {
    id: 3,
    name: "Sass",
    url: "https://sass-lang.com/",
    component: <IoLogoSass className="w-full h-full" color="#fc03c6" />,
  },
  {
    id: 4,
    name: "TailwindCSS",
    url: "https://tailwindcss.com/",
    component: (
      <SiTailwindcss className="w-full h-full text-[#34c4cc] dark:text-[#03f2ff]" />
    ),
  },
  {
    id: 5,
    name: "Javascript",
    url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    component: (
      <BiLogoJavascript className="w-full h-full text-[#e6bf00] dark:text-[#fcd303]" />
    ),
  },
  {
    id: 6,
    name: "Typescript",
    url: "https://www.typescriptlang.org/",
    component: <BiLogoTypescript className="w-full h-full" color="#4466fc" />,
  },
  {
    id: 7,
    name: "React",
    url: "https://react.dev/",
    component: (
      <RiReactjsLine className="w-full h-full text-[#34c4cc] dark:text-[#03f2ff]" />
    ),
  },
  {
    id: 8,
    name: "Recoil",
    url: "https://recoiljs.org/",
    component: (
      <SiRecoil className="w-full h-full text-black dark:text-white" />
    ),
  },
  {
    id: 9,
    name: "Redux",
    url: "https://redux.js.org/",
    component: <BiLogoRedux className="w-full h-full" color="#9d03fc" />,
  },
  {
    id: 10,
    name: "Next.js",
    url: "https://nextjs.org/",
    component: (
      <SiNextdotjs
        className="w-full h-full text-black dark:text-white"
        size={20}
      />
    ),
  },
  {
    id: 11,
    name: "MySQL",
    url: "https://www.mysql.com/",
    component: (
      <GrMysql className="w-full h-full text-[#34c4cc] dark:text-[#03f2ff]" />
    ),
  },
  {
    id: 12,
    name: "GraphQL",
    url: "https://graphql.org/",
    component: <SiGraphql className="w-full h-full" color="#e535ab" />,
  },
  {
    id: 13,
    name: "Apollo",
    url: "https://www.apollographql.com/docs",
    component: <SiApollographql className="w-full h-full" color="#2822f0" />,
  },
  {
    id: 14,
    name: "Git",
    url: "https://git-scm.com/",
    component: <SiGit className="w-full h-full" color="#fc6203" />,
  },
];

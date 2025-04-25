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
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    component: BiLogoHtml5,
    description: {
      br: "HTML (HyperText Markup Language) é a base da web, responsável por definir a estrutura e o significado do conteúdo online.",
      us: "HTML (HyperText Markup Language) is the foundation of the web, responsible for defining the structure and meaning of online content.",
    },
    color: {
      light: "#fc6203",
      dark: "#fc6203",
    },
  },
  {
    id: 2,
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    component: BiLogoCss3,
    description: {
      br: "CSS (Cascading Style Sheets) é uma linguagem usada para definir o estilo/aparência de documentos escritos em HTML ou XML.",
      us: "CSS (Cascading Style Sheets) is a language used to define the style/appearance of documents written in HTML or XML.",
    },
    color: {
      light: "#0349fc",
      dark: "#0349fc",
    },
  },
  {
    id: 3,
    name: "Sass",
    url: "https://sass-lang.com/",
    component: IoLogoSass,
    description: {
      br: "Sass é uma linguagem de estilos que é compilada em CSS, oferecendo recursos como variáveis, aninhamento, mixins e funções.",
      us: "Sass is a style language that compiles into CSS, offering features like variables, nesting, mixins, and functions.",
    },
    color: {
      light: "#fc03c6",
      dark: "#fc03c6",
    },
  },
  {
    id: 4,
    name: "TailwindCSS",
    url: "https://tailwindcss.com/",
    component: SiTailwindcss,
    description: {
      br: `Tailwind é um framework CSS baseado em utilitários, repleto de classes como "grid", "m-2" e "text-right", combinadas para criar qualquer design diretamente no HTML.`,
      us: `Tailwind is a utility-based CSS framework filled with classes like "grid", "m-2" and "text-right", combined to build any design directly in HTML.`,
    },
    color: {
      light: "#34c4cc",
      dark: "#03f2ff",
    },
  },
  {
    id: 5,
    name: "Javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    component: BiLogoJavascript,
    description: {
      br: "JavaScript é uma linguagem leve, interpretada e orientada a objetos, com suporte a funções de primeira classe, amplamente utilizada em páginas da Web.",
      us: "JavaScript is a lightweight, interpreted, object-oriented language with support for first-class functions, widely used in web pages.",
    },
    color: {
      light: "#e6bf00",
      dark: "#fcd303",
    },
  },
  {
    id: 6,
    name: "Typescript",
    url: "https://www.typescriptlang.org/",
    component: BiLogoTypescript,
    description: {
      br: "TypeScript é uma linguagem de programação fortemente tipada, construída sobre JavaScript, com ferramentas aprimoradas para projetos de qualquer tamanho.",
      us: "TypeScript is a strongly typed programming language built on top of JavaScript, with enhanced tools for projects of any size.",
    },
    color: {
      light: "#4466fc",
      dark: "#4466fc",
    },
  },
  {
    id: 7,
    name: "React",
    url: "https://react.dev/",
    component: RiReactjsLine,
    description: {
      br: "React é uma biblioteca JavaScript usada para construir interfaces de usuário, especialmente para aplicações web, conhecida por sua arquitetura baseada em componentes.",
      us: "React is a JavaScript library used for building user interfaces, especially for web applications, known for its component-based architecture.",
    },
    color: {
      light: "#34c4cc",
      dark: "#03f2ff",
    },
  },
  {
    id: 8,
    name: "Recoil",
    url: "https://recoiljs.org/",
    component: SiRecoil,
    description: {
      br: "Recoil é uma biblioteca de gerenciamento de estado para aplicativos React, oferecendo uma abordagem mais granular e semelhante à do React.",
      us: "Recoil is a state management library for React applications, providing a more granular and React-like approach.",
    },
    color: {
      light: "#000000",
      dark: "#ffffff",
    },
  },
  {
    id: 9,
    name: "Redux",
    url: "https://redux.js.org/",
    component: BiLogoRedux,
    description: {
      br: "Redux é uma biblioteca JavaScript que facilita o gerenciamento do estado global de aplicações de forma previsível e organizada.",
      us: "Redux is a JavaScript library that makes it easy to manage the global state of applications in a predictable and organized way.",
    },
    color: {
      light: "#9d03fc",
      dark: "#9d03fc",
    },
  },
  {
    id: 10,
    name: "Next.js",
    url: "https://nextjs.org/",
    component: SiNextdotjs,
    description: {
      br: "Next.js é um framework React que capacita a construção de aplicações web full-stack, que permite o uso de Componentes React para desenvolver a UI, com funcionalidades e otimizações adicionais.",
      us: "Next.js is a React framework that empowers you to build full-stack web applications, that allows the use of React Components to develop the UI, with additional functionality and optimizations.",
    },
    color: {
      light: "#000000",
      dark: "#ffffff",
    },
  },
  {
    id: 11,
    name: "MySQL",
    url: "https://www.mysql.com/",
    component: GrMysql,
    description: {
      br: "MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto que usa SQL para interagir e gerenciar bancos de dados.",
      us: "MySQL is an open-source relational database management system that uses the SQL to interact with and manage databases.",
    },
    color: {
      light: "#34c4cc",
      dark: "#03f2ff",
    },
  },
  {
    id: 12,
    name: "GraphQL",
    url: "https://graphql.org/",
    component: SiGraphql,
    description: {
      br: "GraphQL é uma linguagem de consulta para APIs que utiliza um sistema de tipos definido para seus dados, permitindo a requisição precisa dos dados necessários.",
      us: "GraphQL is a query language for APIs that uses a defined type system for your data, allowing you to request precisely the data you need.",
    },
    color: {
      light: "#e535ab",
      dark: "#e535ab",
    },
  },
  {
    id: 13,
    name: "Apollo",
    url: "https://www.apollographql.com/docs",
    component: SiApollographql,
    description: {
      br: "Apollo GraphQL é um conjunto de ferramentas e bibliotecas desenvolvidas pela Apollo para facilitar o uso e a gestão de APIs GraphQL",
      us: "Apollo GraphQL is a set of tools and libraries developed by Apollo to facilitate the use and management of GraphQL APIs.",
    },
    color: {
      light: "#2822f0",
      dark: "#2822f0",
    },
  },
  {
    id: 14,
    name: "Git",
    url: "https://git-scm.com/",
    component: SiGit,
    description: {
      br: "Git é um sistema de controle de versão distribuído, gratuito e de código aberto, projetado para lidar com projetos de todos os tamanhos.",
      us: "Git is a free, open-source, distributed version control system designed to handle projects of all sizes.",
    },
    color: {
      light: "#fc6203",
      dark: "#fc6203",
    },
  },
];

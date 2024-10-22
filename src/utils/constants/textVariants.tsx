import { HiMiniCommandLine } from "react-icons/hi2";
import { FaComputer } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import { TfiLinkedin } from "react-icons/tfi";
import { BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { TextVariants } from "../types/TextVariants";
import { IoMoonOutline, IoWarning } from "react-icons/io5";
import { PiDevices } from "react-icons/pi";
import { FiInfo, FiSun } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";

export const textVariants: TextVariants = {
  sections: {
    welcome: {
      title: {
        main: {
          br: "Bem vindo(a)!",
          us: "Welcome!",
        },
        bg: {
          br: "Olá",
          us: "Hello",
        },
      },
      subtitle: {
        br: "Por onde devemos começar?",
        us: "Where should we start?",
      },
      toast: {
        title: {
          br: (
            <div className="flex items-center gap-1">
              <IoWarning className="text-xl" />
              <p>Atenção!</p>
            </div>
          ),
          us: (
            <div className="flex items-center gap-1">
              <IoWarning className="text-xl" />
              <p>Warning!</p>
            </div>
          ),
        },
        subtitle: {
          br: "Parece que você veio de ",
          us: "It seems that you came from ",
        },
        description: {
          br: `Caso esteja utilizando o navegador nativo do [APP], é recomendado que você troque para um <u>navegador externo</u> (Ex.: Safari, Google Chrome, ...) para prosseguir na página.<br/><br/>Caso decida continuar por aqui, podem ocorrer bugs, lentidões e/ou erros em algumas funcionalidades, devido às limitações de navegadores nativos.`,
          us: `If you are using [APP]'s native browser, it is recommended that you switch to an <u>external browser</u> (E.g.: Safari, Google Chrome, ...) to continue on the page.<br/><br/>If you decide to go on, bugs, slowdowns and/or errors in some features may occur, due to the limitations of native browsers.`,
        },
        buttons: {
          continue: {
            br: "Ok, entendi.",
            us: "Okay, I understand.",
          },
          notShow: {
            br: "Não mostrar novamente.",
            us: "Don't show again.",
          },
        },
      },
    },
    language: {
      title: {
        main: {
          br: "Idioma",
          us: "Language",
        },
        bg: {
          br: "BR",
          us: "USA",
        },
      },
      subtitle: {
        br: "Selecione o idioma:",
        us: "Select a language:",
      },
    },
    about: {
      title: {
        main: {
          br: "Sobre mim",
          us: "About me",
        },
        bg: {
          br: "Luis",
          us: "Luis",
        },
      },
      paragraph: {
        br: (
          <p>
            Como <i>desenvolvedor web</i>, eu, <strong>Luis Henrique</strong>,
            sou especializado em criar sites personalizados sob demanda para
            atender às necessidades específicas dos meus clientes. Utilizando
            tecnologias difundidas no mercado web e minha expertise em{" "}
            <i>TypeScript, React, Next.js</i>, <i>MySQL</i> e <i>GraphQL</i>,
            entrego soluções web de alta qualidade, responsivas e amigáveis.
            Minhas habilidades abrangem tanto o desenvolvimento front-end quanto
            o back-end, garantindo uma experiência web de <u>alta qualidade</u>{" "}
            e <u>eficiente</u> para os usuários. Estou comprometido em me manter
            atualizado com as últimas tendências e melhores práticas do setor
            para fornecer <u>soluções inovadoras</u> e <u>eficazes</u>.
          </p>
        ),
        us: (
          <p>
            As a <i>web developer</i>, I, <strong>Luis Henrique</strong>,
            specialize in creating customized websites tailored to meet the
            specific needs of my clients. Leveraging popular web technologies
            and my expertise in <i>TypeScript, React, Next.js</i>, <i>MySQL</i>{" "}
            and <i>GraphQL</i>, I deliver high-quality, responsive, and
            user-friendly web solutions. My skills encompass both front-end and
            back-end development, ensuring a <u>high-quality</u> and{" "}
            <u>efficient</u> web experience for users. I am dedicated to staying
            updated with the latest industry trends and best practices to
            provide <u>innovative</u> and <u>effective solutions</u>.
          </p>
        ),
      },
      subtitle: {
        br: "Conhecimentos:",
        us: "Knowledge:",
      },
      link: {
        br: "Currículo",
        us: "Resume",
      },
      audio: {
        url: {
          br: "/audio/about-me-br.mp3",
          us: "/audio/about-me-us.mp3",
        },
      },
    },
    experience: {
      title: {
        main: {
          br: "Experiências",
          us: "Experience",
        },
        bg: {
          br: "Trabalho",
          us: "Work",
        },
      },
      jobs: [
        {
          id: 1,
          function: {
            br: "Desenvolvedor Web Freelancer",
            us: "Freelance Web Developer",
          },
          company: {
            br: "",
            us: "",
          },
          description: {
            br: "Atuei no desenvolvimento de páginas web sob medida para algumas empresas, construindo aplicações como catálogos e vitrines virtuais para lojas. Nesses trabalhos, utilizei as mais diversas stacks Front-end, com as principais sendo React, Typescript e TailwindCSS.",
            us: "I worked on the development of web pages on demand for some companies, building applications such as catalogs and virtual showcases for stores. In these works, I used the most diverse Front-end technologies, with the main ones being React, Typescript and TailwindCSS.",
          },
          logo: "",
          date: {
            br: "Out 2023 - Hoje",
            us: "Oct 2023 - Today",
          },
          icon: <HiMiniCommandLine />,
        },
        {
          id: 2,
          function: {
            br: "Estagiário de TI",
            us: "IT Intern",
          },
          company: {
            br: "Secretaria Municipal da Gestão Regional",
            us: "Secretaria Municipal da Gestão Regional",
          },
          description: {
            br: "Auxiliei na prestação de suporte na programação de micros, acompanhei atividades relacionadas ao departamento de informática, acompanhei projetos e auxiliei no gerenciamento da informática.",
            us: "I helped provide support in computer programming, monitored activities related to the IT department, monitored projects and helped with IT management.",
          },
          logo: "/images/jobs/logo-prefeitura.png",
          date: {
            br: "Fev 2024 - Hoje",
            us: "Feb 2024 - Today",
          },
          icon: <FaComputer />,
        },
      ],
    },
    projects: {
      title: {
        main: {
          br: "Projetos",
          us: "Projects",
        },
        bg: {
          br: "Web",
          us: "Web",
        },
      },
      subtitle: {
        br: "Clique em qualquer projeto para saber os detalhes.",
        us: "Click on any project to learn more details.",
      },
      tabs: [
        {
          id: 1,
          value: "all",
          text: {
            br: "Todos",
            us: "All",
          },
        },
        {
          id: 2,
          value: "fullstack",
          text: {
            br: "Full Stack",
            us: "Full Stack",
          },
        },
        {
          id: 3,
          value: "frontend",
          text: {
            br: "Frontend",
            us: "Frontend",
          },
        },
        {
          id: 4,
          value: "backend",
          text: {
            br: "Backend",
            us: "Backend",
          },
        },
      ],
      caption: {
        br: "Você pode ver a lista completa no",
        us: "Check out the full list on",
      },
      list: [
        {
          id: uuidv4(),
          tag: "fullstack",
          title: {
            br: "Bike4Cash - Página Web",
            us: "Bike4Cash - Webpage",
          },
          images: {
            path: "/images/projects/bike4cash/",
            list: ["1.png", "2.png", "3.png"],
          },
          description: {
            br: "Plataforma fictícia de aluguel de bicicletas, com cadastro de usuários, login com <i>OAuth 2.0</i>, avaliação de experiência e comentários, e vários modelos de bicicletas, obtidas pela API GraphQL feita para o Bike4Cash.",
            us: "Fictional bike rental web platform, with user registration, login with <i>OAuth 2.0</i>, experience rating and comments, and various bike models, provided by the GraphQL API made for Bike4Cash.",
          },
          date: {
            br: "27 Dez. 2023",
            us: "Dec. 27, 2023",
          },
          stacks: [4, 6, 10, 11, 13],
          url: "https://bike4cash.vercel.app/",
          repository: "https://github.com/luissshc29/bike4cash",
          complexity: 5,
          highlight: true,
        },
        {
          id: uuidv4(),
          tag: "backend",
          title: {
            br: "Bike4Cash - API",
            us: "Bike4Cash - API",
          },
          images: {
            path: "/images/projects/bike4cash-api/",
            list: ["1.png"],
          },
          description: {
            br: "API Web para o Bike4Cash, com <i>resolvers</i> para obter a lista de bicicletas, filtradas por categoria, preço máximo e busca, e para listar as categorias disponíveis.<br/>Saiba mais no <code>README.md</code> no repositório.",
            us: "Web API for Bike4Cash, with resolvers to obtain the list of bikes, filtered by category, maximum price and search, and to list the available categories.<br/>Learn more in the <code>README.md</code> in the repository.",
          },
          date: {
            br: "14 Set. 2024",
            us: "Sep. 14, 2024",
          },
          stacks: [6, 13, 12, 11],
          url: "https://bike4cash-api.vercel.app/",
          repository: "https://github.com/luissshc29/bike4cash--API",
          complexity: 4,
        },
        {
          id: uuidv4(),
          tag: "fullstack",
          title: {
            br: "API View - Página Web",
            us: "API View - Webpage",
          },
          images: {
            path: "/images/projects/api-view/",
            list: ["1.png", "2.png", "3.png"],
          },
          description: {
            br: "Interface para uma API GraphQL, com rotas para criação, edição e exclusão de usuários e posts.",
            us: "Interface for a GraphQL API, with routes for creating, editing and deleting users and posts.",
          },
          date: {
            br: "28 Jun. 2024",
            us: "Jun. 28, 2024",
          },
          stacks: [4, 6, 10, 13],
          url: "https://api-view-mu.vercel.app/",
          repository: "https://github.com/luissshc29/api-view",
          complexity: 3,
        },
        {
          id: uuidv4(),
          tag: "backend",
          title: {
            br: "API View - API",
            us: "API View - API",
          },
          images: {
            path: "/images/projects/api-view-url/",
            list: ["1.png"],
          },
          description: {
            br: "API Web com operações CRUD. Com <i>resolvers</i> para criação, edição e exclusão de usuários e posts.<br/>Saiba mais no <code>README.md</code> no repositório.",
            us: "Web API with CRUD operations. With resolvers for creating, editing and deleting users and posts.<br/>Learn more at <code>README.md</code> in the repository.",
          },
          date: {
            br: "28 Jun. 2024",
            us: "Jun. 28, 2024",
          },
          stacks: [6, 13, 12, 11],
          url: "https://api-view-url.vercel.app/",
          repository: "https://github.com/luissshc29/API--api-view",
          complexity: 3,
        },
        {
          id: uuidv4(),
          tag: "frontend",
          title: {
            br: "Catálogo Unicapas®",
            us: "Unicapas® catalog",
          },
          images: {
            path: "/images/projects/unicapas/",
            list: ["1.png", "2.png", "3.png"],
          },
          description: {
            br: "Catálogo virtual de produtos de uma empresa real de acessórios para moto. Saiba mais sobre produtos, endereço e contatos acessando a página.",
            us: "Virtual product catalog from a real motorcycle accessories company. Find out more about products, address and contacts by accessing the page.",
          },
          date: {
            br: "25 Out. 2023",
            us: "Oct. 25, 2023",
          },
          stacks: [4, 7, 6],
          url: "https://unicapas.com.br",
          complexity: 1,
        },
        {
          id: uuidv4(),
          tag: "fullstack",
          title: {
            br: "AuthSystem",
            us: "AuthSystem",
          },
          images: {
            path: "/images/projects/auth-system/",
            list: ["1.png", "2.png"],
          },
          description: {
            br: "Modelo de página de login com <i>OAuth 2.0</i>, guardando as informações dos usuários em uma tabela simples no banco de dados.",
            us: "Login page template with OAuth 2.0, storing user information in a simple table in the database.",
          },
          date: {
            br: "14 Dez. 2023",
            us: "Dec. 14, 2023",
          },
          stacks: [4, 6, 10, 11],
          url: "https://auth-system-iota.vercel.app/",
          repository: "https://github.com/luissshc29/Auth-system",
          complexity: 3,
        },
        {
          id: uuidv4(),
          tag: "frontend",
          title: {
            br: "Pokédex",
            us: "Pokédex",
          },
          images: {
            path: "/images/projects/pokedex/",
            list: ["1.png", "2.png"],
          },
          description: {
            br: "Pokédex online, com várias informações valiosas sobre Pokémon.<br/>A página consome dados da API <i>PokéAPI</i>, que você pode acessar <a href='https://pokeapi.co/' target='_blank'><u>clicando aqui</u></a>.",
            us: "Online Pokédex, with lots of valuable information about Pokémon.<br/>The page consumes data from the <i>PokéAPI</i> API, which you can access by <a href='https://pokeapi.co/' target='_blank'><u>clicking here</u></a>.",
          },
          date: {
            br: "8 Set. 2023",
            us: "Sep. 8, 2023",
          },
          stacks: [3, 7, 6, 10],
          url: "https://pokedex-omega-tan-81.vercel.app/",
          repository: "https://github.com/luissshc29/pokedex",
          complexity: 2,
          highlight: true,
        },
        {
          id: uuidv4(),
          tag: "frontend",
          title: {
            br: "Bloco de notas",
            us: "Notepad",
          },
          images: {
            path: "/images/projects/notepad/",
            list: ["1.png"],
          },
          description: {
            br: "Bloco de notas online que guardará suas anotações para sempre. O site guarda as notas no <i>localStorage</i> do navegador, cada uma com seu título, descrição e cor.",
            us: "Online notepad that will save your notes forever. The site stores the notes in the browser's <i>localStorage</i>, each with its title, description and color.",
          },
          date: {
            br: "1 Nov. 2023",
            us: "Nov. 1, 2023",
          },
          stacks: [4, 6, 9, 10],
          url: "https://notepad-luissshc29.vercel.app/",
          repository: "https://github.com/luissshc29/Notepad",
          complexity: 3,
          highlight: true,
        },
        {
          id: uuidv4(),
          tag: "frontend",
          title: {
            br: "Countries Wiki",
            us: "Countries Wiki",
          },
          images: {
            path: "/images/projects/countries-wiki/",
            list: ["1.png", "2.png"],
          },
          description: {
            br: "Enciclopédia de páises, com informações de cada um.<br/>A página foi feita para um desafio no <a href='https://www.frontendmentor.io/' target='_blank'><u>Frontend Mentor</u></a> e consome dados da API <i>REST Countries</i>, que você pode acessar <a href='https://restcountries.com/' target='_blank'><u>clicando aqui</u></a>.",
            us: "Encyclopedia of countries, with information about each one.<br/>The page was made for a challenge on <a href='https://www.frontendmentor.io/' target='_blank'><u>Frontend Mentor</u></a> and consumes data from the <i>REST Countries</i> API, which you can access by <a href='https://restcountries.com/' target='_blank'><u>clicking here</u></a>.",
          },
          date: {
            br: "5 Nov. 2023",
            us: "Nov. 5, 2023",
          },
          stacks: [4, 6, 10],
          url: "https://countries-wiki-tau.vercel.app/",
          repository: "https://github.com/luissshc29/Countries-Wiki",
          complexity: 2,
        },
        {
          id: uuidv4(),
          tag: "frontend",
          title: {
            br: "React Supplements",
            us: "React Supplements",
          },
          images: {
            path: "/images/projects/react-supplements/",
            list: ["1.png", "2.png", "3.png"],
          },
          description: {
            br: "Loja virtual fictícia de suplementos para musculação, feita para prática do uso do <i>Context</i> no React, com as páginas de carrinho e de finalização da compra conectadas aos estados globais.",
            us: "Fictional online bodybuilding supplement store, made to practice the use of Context in React, with cart and checkout pages connected to global states.",
          },
          date: {
            br: "2 Ago. 2023",
            us: "Aug. 2, 2023",
          },
          stacks: [3, 6, 7],
          url: "https://react-supplements.vercel.app/",
          repository: "https://github.com/luissshc29/react-supplements",
          complexity: 1,
        },
      ],
    },
    contacts: {
      title: {
        main: {
          br: "Contatos",
          us: "Contacts",
        },
        bg: {
          br: "Info",
          us: "Info",
        },
      },
      subtitle: {
        br: (
          <p>
            Sinta-se à vontade para <u>me contatar</u> e/ou{" "}
            <u>fazer um orçamento</u> em algum dos meios abaixo!
          </p>
        ),
        us: (
          <p>
            Feel free to <u>contact me</u> and/or <u>request a quote</u> in any
            of the ways below!
          </p>
        ),
      },
      info: {
        social: [
          {
            id: 1,
            text: "Linkedin",
            username: "Luis Henrique",
            link: "https://www.linkedin.com/in/luis-henrique-6a7425165/",
            component: <TfiLinkedin />,
          },
          {
            id: 2,
            text: "GitHub",
            username: "@luissshc29",
            link: "https://github.com/luissshc29",
            component: <BsGithub className="text-white dark:text-black" />,
          },
          {
            id: 3,
            text: "Instagram",
            username: "@luissshc_",
            link: "https://www.instagram.com/luissshc_/",
            component: <BsInstagram />,
          },
          {
            id: 4,
            text: "WhatsApp",
            link: "https://api.whatsapp.com/send/",
            component: <BsWhatsapp />,
          },
        ],
        phone: {
          text: "+55 (85) 98951-3959",
          raw: "5585989513959",
        },
        email: {
          text: "luishcc2003@gmail.com",
        },
        whatsappMessage: {
          br: "Olá!%20Vim%20pelo%20seu%20portfólio.",
          us: "Hello!%20I%20came%20from%20your%20portfolio.",
        },
      },
      form: {
        text: {
          br: (
            <div className="flex flex-wrap items-center justify-center gap-1">
              <FiInfo className="text-lg" /> Você também pode preencher um
              formulário,{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeoaZv_XB15-3QHgqdHm-qDVGggPj1XSYlA0wIvf4L9BysZdw/viewform"
                target="_blank"
                className="flex w-fit items-center gap-[2px] underline"
              >
                clicando aqui
                <RiExternalLinkLine className="text-lg" />
              </a>
            </div>
          ),
          us: (
            <div className="flex flex-wrap items-center justify-center gap-1">
              <FiInfo className="text-lg" /> You can also fill out a form, by{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfr4SLa31PNH489ktl2jPJriFJl3P-se7zCW1X3VzeLZAI8Aw/viewform"
                target="_blank"
                className="flex w-fit items-center gap-[2px] underline"
              >
                clicking here
                <RiExternalLinkLine className="text-lg" />
              </a>
            </div>
          ),
        },
      },
      toast: {
        title: {
          br: "Feito!",
          us: "Done!",
        },
        description: {
          br: "O texto foi copiado para a área de transferência.",
          us: "The text was copied to clipboard.",
        },
      },
    },
  },
  others: {
    header: {
      options: [
        {
          id: 1,
          text: {
            br: "Idioma",
            us: "Language",
          },
          navigateTo: "language",
        },
        {
          id: 2,
          text: {
            br: "Sobre mim",
            us: "About me",
          },
          navigateTo: "about",
        },

        {
          id: 3,
          text: {
            br: "Experiências",
            us: "Experience",
          },
          navigateTo: "experience",
        },

        {
          id: 4,
          text: {
            br: "Projetos",
            us: "Projects",
          },
          navigateTo: "projects",
        },

        {
          id: 5,
          text: {
            br: "Contatos",
            us: "Contacts",
          },
          navigateTo: "contacts",
        },
      ],
    },
    labels: {
      projects: {
        card: {
          text: {
            br: "Saiba mais",
            us: "Learn more",
          },
        },
        modal: {
          description: {
            br: "Descrição",
            us: "Description",
          },
          stacks: {
            br: "Tecnologias",
            us: "Technologies",
          },
          date: {
            br: "Data",
            us: "Date",
          },
          link: {
            br: "Website",
            us: "Website",
          },
          repo: {
            br: "Repositório",
            us: "Repository",
          },
          complexity: {
            br: "Complexidade:",
            us: "Complexity:",
          },
        },
      },
      contacts: {
        phone: {
          br: "Telefone",
          us: "Phone number",
        },
        email: {
          br: "Email",
          us: "Email",
        },
        social: {
          br: "Redes sociais",
          us: "Social media",
        },
      },
    },
    themeSelector: {
      options: [
        {
          id: 1,
          text: {
            br: "Sistema",
            us: "System",
          },
          icon: <PiDevices />,
        },
        {
          id: 2,
          text: {
            br: "Claro",
            us: "Light",
          },
          icon: <FiSun />,
        },
        {
          id: 3,
          text: {
            br: "Escuro",
            us: "Dark",
          },
          icon: <IoMoonOutline />,
        },
      ],
    },
  },
};

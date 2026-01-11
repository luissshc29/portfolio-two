import { HiMiniCommandLine } from "react-icons/hi2";
import { FaCode, FaComputer, FaMapPin } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import { TfiLinkedin } from "react-icons/tfi";
import { BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { TextVariants } from "../types/TextVariants";
import { IoMoonOutline, IoWarning } from "react-icons/io5";
import { PiDevices } from "react-icons/pi";
import { FiInfo, FiSun } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

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
            Como <i>desenvolvedor</i>, eu, <strong>Luis Henrique</strong>, sou
            especializado em criar sites personalizados sob demanda para atender
            às necessidades específicas dos meus clientes. Utilizando
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
            As a <i>developer</i>, I, <strong>Luis Henrique</strong>, specialize
            in creating customized websites tailored to meet the specific needs
            of my clients. Leveraging popular web technologies and my expertise
            in <i>TypeScript, React, Next.js</i>, <i>MySQL</i> and{" "}
            <i>GraphQL</i>, I deliver high-quality, responsive, and
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
      resume: {
        button: {
          text: {
            primary: {
              br: "Currículo",
              us: "Resume",
            },
            secondary: {
              br: "Baixar",
              us: "Download",
            },
          },
        },
        document_url: {
          br: "/curriculo-luis-henrique-da-cunha-cavalcante.pdf",
          us: "/resume-luis-henrique-da-cunha-cavalcante.pdf",
        },
      },
      audio: {
        url: {
          br: "/audio/about-me-br.mp3",
          us: "/audio/about-me-us.mp3",
        },
      },
    },
    tech: {
      title: {
        main: {
          br: "Tecnologias",
          us: "Stacks",
        },
        bg: {
          br: "Tech",
          us: "Tech",
        },
      },
      subtitle: {
        touch: {
          br: "Toque para saber mais detalhes",
          us: "Touch to learn more details",
        },
        hover: {
          br: "Passe o mouse para saber mais detalhes",
          us: "Hover to learn more details",
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
            br: "Desenvolvedor de Software • Pleno",
            us: "Software Developer • Mid-level",
          },
          company: {
            br: "G4F",
            us: "G4F",
          },
          description: [
            {
              id: 1,
              br: `Uso intensivo de HTML, CSS, Javascript e consumo de APIs REST na elaboração de scripts e prototipagem de telas de serviços.`,
              us: `Intensive use of HTML, CSS, JavaScript, and REST API consumption for scripting and service screen prototyping.`,
            },
            {
              id: 2,
              br: `Manutenção e atualização do Portal de Serviços do órgão contratante, atendendo mais de 2.500 colaboradores ativos.`,
              us: `Maintenance and continuous updates of the Contracting Authority’s Services Portal, supporting over 2,500 active employees.`,
            },
            {
              id: 3,
              br: `Elaboração de queries em bancos de dados MySQL, com consultas a informações de avaliações de desempenho, cadastros de pessoas e demais dados institucionais.`,
              us: `Development of MySQL database queries, retrieving data related to performance evaluations, personnel records, and other institutional information.`,
            },
            {
              id: 4,
              br: `Colaboração no desenvolvimento, testes e melhorias de novos recursos, incluindo funcionalidades críticas, como pagamento de benefícios, folhas de pagamento e avaliação de servidores.`,
              us: `Collaboration in the development, testing, and enhancement of new features, including critical functionalities such as benefits payment, payroll processing, and employee performance evaluation.`,
            },
            {
              id: 5,
              br: `Participação diária em cerimônias ágeis (Scrum e Kanban), utilizando o Redmine para controle de tarefas, prazos, entregas, sprints e planejamentos.`,
              us: `Daily participation in Agile ceremonies (Scrum and Kanban), using Redmine for task management, deadlines, deliveries, sprint planning, and tracking.`,
            },
          ],
          logo: "/images/jobs/logo-g4f.png",
          date: {
            br: "Nov 2025 - Hoje",
            us: "Nov 2025 - Today",
          },
          icon: <HiMiniCommandLine />,
        },
        {
          id: 2,
          function: {
            br: "Desenvolvedor de Software • Estágio",
            us: "Software Developer • Internship",
          },
          company: {
            br: "Ministério Público do Estado do Ceará",
            us: "Ministério Público do Estado do Ceará",
          },
          description: [
            {
              id: 1,
              br: `Atuação com HTML, CSS e JavaScript em tarefas de desenvolvimento e ajustes front-end, garantindo aderência às boas práticas de usabilidade e responsividade.`,
              us: `Use of HTML, CSS, and JavaScript for front-end development and interface adjustments, ensuring usability and responsiveness.`,
            },
            {
              id: 2,
              br: `Elaboração de roteiros de teste, baseados nos requisitos definidos pelos clientes, garantindo a cobertura e a qualidade das entregas.`,
              us: `Preparation of test scripts based on the requirements defined by the clients, ensuring coverage and quality of deliveries.`,
            },
            {
              id: 3,
              br: `Análise de documentação técnica, incluindo diagramas de classes, fluxogramas e especificações de requisitos funcionais, assegurando o correto entendimento das demandas.`,
              us: `Analysis of technical documentation, including class diagrams, flowcharts and functional requirements specifications, ensuring correct understanding of demands.`,
            },
            {
              id: 4,
              br: `Colaboração no desenvolvimento, testes e entrega de novas funcionalidades, contribuindo para a evolução contínua dos sistemas da empresa.`,
              us: `Collaboration in the development, testing and delivery of new features, contributing to the continuous evolution of the company's systems.`,
            },
            {
              id: 5,
              br: `Manutenção e aprimoramento de sistemas internos e de clientes, utilizando a plataforma digital SYDLE ONE® como base para as operações.`,
              us: `Maintenance and improvement of internal and client systems, using the SYDLE ONE® digital platform as the basis for operations.`,
            },
            {
              id: 6,
              br: `Participação ativa em cerimônias ágeis, como reuniões diárias (dailies), semanais e mensais, contribuindo para a definição de metas, acompanhamento de entregas e retrospectivas.`,
              us: `Active participation in agile ceremonies, such as daily, weekly and monthly meetings, contributing to the definition of goals, monitoring of deliveries and retrospectives.`,
            },
          ],
          logo: "/images/jobs/logo-mpce.png",
          date: {
            br: "Mar 2025 - Out 2025",
            us: "Mar 2025 - Oct 2025",
          },
          icon: <HiMiniCommandLine />,
        },
        {
          id: 3,
          function: {
            br: "Desenvolvedor Web • Freelancer",
            us: "Web Developer • Freelancer",
          },
          company: {
            br: "",
            us: "",
          },
          description: [
            {
              id: 1,
              br: `Desenvolvimento de aplicações web sob demanda para empresas, incluindo catálogos virtuais e plataformas interativas, utilizando React, Next.js, TypeScript e TailwindCSS.`,
              us: `Development of on-demand web applications for companies, including virtual catalogs and interactive platforms, using React, Next.js, TypeScript and TailwindCSS.`,
            },
            {
              id: 2,
              br: `Implementação de design responsivo e otimizado para diferentes dispositivos, com foco em UI/UX e acessibilidade.`,
              us: `Implementation of responsive design optimized for different devices, focusing on UI/UX and accessibility.`,
            },
            {
              id: 3,
              br: `Integração de APIs REST e GraphQL (Apollo Client e Apollo Server) para consumo de dados dinâmicos.`,
              us: `Integration with REST and GraphQL APIs (Apollo Client and Apollo Server) for dynamic data consumption.`,
            },
            {
              id: 4,
              br: `Manutenção e aprimoramento de código visando performance, otimização de SEO e escalabilidade.`,
              us: `Code maintenance and improvement aimed at performance, SEO optimization and scalability.`,
            },
            {
              id: 5,
              br: `Desenvolvimento e manutenção do site Unicapas, aplicando React, TypeScript e TailwindCSS.`,
              us: `Development and maintenance of the Unicapas website, applying React, TypeScript and TailwindCSS.`,
            },
          ],
          logo: "/images/jobs/freelancer.png",
          date: {
            br: "Out 2023 - Hoje",
            us: "Oct 2023 - Today",
          },
          icon: <FaCode />,
        },
        {
          id: 4,
          function: {
            br: "Suporte de TI • Estágio",
            us: "IT Support • Internship",
          },
          company: {
            br: "Secretaria Municipal da Gestão Regional",
            us: "Secretaria Municipal da Gestão Regional",
          },
          description: [
            {
              id: 1,
              br: `Suporte técnico e acompanhamento de infraestrutura de TI, incluindo instalação, configuração e manutenção de hardware e software.`,
              us: `Technical support and monitoring of IT infrastructure, including installation, configuration and maintenance of hardware and software.`,
            },
            {
              id: 2,
              br: `Monitoramento e auxílio no setor de informática, garantindo o funcionamento eficiente dos sistemas e redes internas.`,
              us: `Monitoring and assistance in the IT sector, ensuring the efficient functioning of internal systems and networks.`,
            },
            {
              id: 3,
              br: `Gerenciamento de equipamentos, realizando chamados, diagnósticos e substituição de componentes defeituosos para garantir alta disponibilidade.`,
              us: `Equipment management, carrying out calls, diagnostics and replacement of defective components to ensure high availability.`,
            },
            {
              id: 4,
              br: `Apoio a usuários, oferecendo suporte técnico para resolução de dúvidas e incidentes, promovendo maior eficiência operacional.`,
              us: `Support for users, offering technical support to resolve doubts and incidents, promoting greater operational efficiency.`,
            },
            {
              id: 5,
              br: `Elaboração de planilhas e controle de dados operacionais utilizando Excel, otimizando rotinas administrativas e técnicas.`,
              us: `Preparation of spreadsheets and control of operational data using Excel, optimizing administrative and technical routines.`,
            },
          ],
          logo: "/images/jobs/logo-prefeitura.png",
          date: {
            br: "Fev 2024 - Fev 2025",
            us: "Feb 2024 - Feb 2025",
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
            br: "Sistema Norimaq®",
            us: "Norimaq® System",
          },
          images: {
            path: "/images/projects/norimaq/",
            list: ["1.png", "2.png", "3.png"],
          },
          description: {
            br: "Sistema de controle de produção para a empresa Norimaq®, com cadastro de ordens de serviço, controle de roteiro, progresso, operadores, solicitações de produção e +10 relatórios para o gerente de produção.",
            us: "Production control system for Norimaq®, featuring service order registration, workflow routing control, progress tracking, operator management, production requests, and 10+ reports for the production manager.",
          },
          date: {
            br: "12 Ago. 2025",
            us: "Aug. 12, 2025",
          },
          stacks: ["tailwindcss", "typescript", "nextjs", "nodejs", "supabase"],
          complexity: 5,
          highlight: true,
        },
        {
          id: uuidv4(),
          tag: "frontend",
          title: {
            br: "Flor de Açúcar®",
            us: "Flor de Açúcar®",
          },
          images: {
            path: "/images/projects/flor-de-acucar/",
            list: ["1.png"],
          },
          description: {
            br: "Landing page da loja de cookies Flor de Açúcar®, com informações dos produtos, essência da loja e belas animações feitas com GSAP.",
            us: "Landing page for Flor de Açúcar® cookie shop, featuring product information, brand essence, and beautiful animations built with GSAP.",
          },
          date: {
            br: "28 Jul. 2025",
            us: "Jul. 28, 2025",
          },
          stacks: ["tailwindcss", "typescript", "nextjs", "gsap"],
          complexity: 2,
        },
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
          stacks: ["tailwindcss", "typescript", "nextjs", "mysql", "apollo"],
          url: "https://bike4cash.vercel.app/",
          repository: "https://github.com/luissshc29/bike4cash",
          complexity: 5,
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
            br: "API Web para o Bike4Cash, com <i>resolvers</i> para obter a lista de bicicletas, filtradas por categoria, preço máximo e busca, e para listar as categorias disponíveis.<br/>Saiba mais no <code>README.md</code> do repositório.",
            us: "Web API for Bike4Cash, with resolvers to get the list of bicycles filtered by category, maximum price, and search, as well as to list the available categories.<br/>Learn more in the repository's <code>README.md</code>.",
          },
          date: {
            br: "14 Set. 2024",
            us: "Sep. 14, 2024",
          },
          stacks: ["typescript", "apollo", "graphql", "nodejs", "mysql"],
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
          stacks: ["tailwindcss", "typescript", "nextjs", "apollo"],
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
            br: "API Web com operações CRUD. Com <i>resolvers</i> para criação, edição e exclusão de usuários e posts.<br/>Saiba mais no <code>README.md</code> do repositório.",
            us: "Web API with CRUD operations. With resolvers for creating, editing, and deleting users and posts.<br/>Learn more in the repository's <code>README.md</code>.",
          },
          date: {
            br: "28 Jun. 2024",
            us: "Jun. 28, 2024",
          },
          stacks: ["typescript", "apollo", "graphql", "nodejs", "mysql"],
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
          stacks: ["tailwindcss", "typescript", "react"],
          url: "https://unicapas.com.br",
          complexity: 1,
          highlight: true,
        },
        // {
        //   id: uuidv4(),
        //   tag: "fullstack",
        //   title: {
        //     br: "AuthSystem",
        //     us: "AuthSystem",
        //   },
        //   images: {
        //     path: "/images/projects/auth-system/",
        //     list: ["1.png", "2.png"],
        //   },
        //   description: {
        //     br: "Modelo de página de login com <i>OAuth 2.0</i>, guardando as informações dos usuários em uma tabela simples no banco de dados.",
        //     us: "Login page template with OAuth 2.0, storing user information in a simple table in the database.",
        //   },
        //   date: {
        //     br: "14 Dez. 2023",
        //     us: "Dec. 14, 2023",
        //   },
        //   stacks: [4, 6, 10, 11],
        //   url: "https://auth-system-iota.vercel.app/",
        //   repository: "https://github.com/luissshc29/Auth-system",
        //   complexity: 3,
        // },
        // {
        //   id: uuidv4(),
        //   tag: "frontend",
        //   title: {
        //     br: "Pokédex",
        //     us: "Pokédex",
        //   },
        //   images: {
        //     path: "/images/projects/pokedex/",
        //     list: ["1.png", "2.png"],
        //   },
        //   description: {
        //     br: "Pokédex online, com várias informações valiosas sobre Pokémon.<br/>A página consome dados da API <i>PokéAPI</i>, que você pode acessar <a href='https://pokeapi.co/' target='_blank'><u>clicando aqui</u></a>.",
        //     us: "Online Pokédex, with lots of valuable information about Pokémon.<br/>The page consumes data from the <i>PokéAPI</i> API, which you can access by <a href='https://pokeapi.co/' target='_blank'><u>clicking here</u></a>.",
        //   },
        //   date: {
        //     br: "8 Set. 2023",
        //     us: "Sep. 8, 2023",
        //   },
        //   stacks: [3, 7, 6, 10],
        //   url: "https://pokedex-omega-tan-81.vercel.app/",
        //   repository: "https://github.com/luissshc29/pokedex",
        //   complexity: 2,
        // },
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
          stacks: ["tailwindcss", "typescript", "redux", "nextjs"],
          url: "https://notepad-luissshc29.vercel.app/",
          repository: "https://github.com/luissshc29/Notepad",
          complexity: 3,
        },
        // {
        //   id: uuidv4(),
        //   tag: "frontend",
        //   title: {
        //     br: "Countries Wiki",
        //     us: "Countries Wiki",
        //   },
        //   images: {
        //     path: "/images/projects/countries-wiki/",
        //     list: ["1.png", "2.png"],
        //   },
        //   description: {
        //     br: "Enciclopédia de páises feita para um desafio no <a href='https://www.frontendmentor.io/' target='_blank'><u>Frontend Mentor</u></a>.<br/>A página consome dados da API <i>REST Countries</i>, que você pode acessar <a href='https://restcountries.com/' target='_blank'><u>clicando aqui</u></a>.",
        //     us: "Encyclopedia of countries made for a challenge on <a href='https://www.frontendmentor.io/' target='_blank'><u>Frontend Mentor</u></a>.<br/>The page consumes data from the <i>REST Countries</i> API, which you can access by <a href='https://restcountries.com/' target='_blank'><u>clicking here</u></a>.",
        //   },
        //   date: {
        //     br: "5 Nov. 2023",
        //     us: "Nov. 5, 2023",
        //   },
        //   stacks: [4, 6, 10],
        //   url: "https://countries-wiki-tau.vercel.app/",
        //   repository: "https://github.com/luissshc29/Countries-Wiki",
        //   complexity: 2,
        // },
        // {
        //   id: uuidv4(),
        //   tag: "frontend",
        //   title: {
        //     br: "React Supplements",
        //     us: "React Supplements",
        //   },
        //   images: {
        //     path: "/images/projects/react-supplements/",
        //     list: ["1.png", "2.png", "3.png"],
        //   },
        //   description: {
        //     br: "Loja virtual fictícia de suplementos para musculação, feita para prática do uso do <i>Context</i> no React, com as páginas de carrinho e de finalização da compra conectadas aos estados globais.",
        //     us: "Fictional online bodybuilding supplement store, made to practice the use of Context in React, with cart and checkout pages connected to global states.",
        //   },
        //   date: {
        //     br: "2 Ago. 2023",
        //     us: "Aug. 2, 2023",
        //   },
        //   stacks: [3, 6, 7],
        //   url: "https://react-supplements.vercel.app/",
        //   repository: "https://github.com/luissshc29/react-supplements",
        //   complexity: 1,
        // },
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
            Você pode <u>me contatar</u> e/ou <u>fazer um orçamento</u> em algum
            dos meios abaixo!
          </p>
        ),
        us: (
          <p>
            You can <u>contact me</u> and/or <u>request a quote</u> in any of
            the ways below!
          </p>
        ),
      },
      social: {
        media: [
          {
            id: 1,
            text: "Linkedin",
            username: "Luis Henrique",
            link: "https://www.linkedin.com/in/luis-henrique-dev",
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
        whatsapp_message: {
          br: "Olá!%20Vim%20pelo%20seu%20portfólio.",
          us: "Hello!%20I%20came%20from%20your%20portfolio.",
        },
      },
      alert: {
        google_form: {
          br: (
            <div className="flex flex-wrap justify-center items-center gap-1">
              <FiInfo className="text-lg" /> Você também pode preencher um
              formulário,{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeoaZv_XB15-3QHgqdHm-qDVGggPj1XSYlA0wIvf4L9BysZdw/viewform"
                target="_blank"
                className="flex items-center gap-[2px] w-fit underline"
              >
                clicando aqui
                <RiExternalLinkLine className="text-lg" />
              </a>
            </div>
          ),
          us: (
            <div className="flex flex-wrap justify-center items-center gap-1">
              <FiInfo className="text-lg" /> You can also fill out a form, by{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfr4SLa31PNH489ktl2jPJriFJl3P-se7zCW1X3VzeLZAI8Aw/viewform"
                target="_blank"
                className="flex items-center gap-[2px] w-fit underline"
              >
                clicking here
                <RiExternalLinkLine className="text-lg" />
              </a>
            </div>
          ),
        },
      },
      contact: {
        phone: {
          tooltip: {
            icon: <BiSolidPhoneCall />,
            text: {
              br: "Ligar",
              us: "Call",
            },
          },
          text: "+55 (85) 98951-3959",
          raw: "5585989513959",
        },
        email: {
          tooltip: {
            icon: <MdEmail />,
            text: {
              br: "Enviar",
              us: "Send",
            },
          },
          text: "luishcc2003@gmail.com",
        },
        location: {
          tooltip: {
            icon: <FaMapPin />,
            text: {
              br: "Visitar",
              us: "Visit",
            },
          },
          city: {
            br: "Fortaleza",
            us: "Fortaleza",
          },
          state: {
            br: "Ceará",
            us: "Ceará",
          },
          country: {
            br: "Brasil",
            us: "Brazil",
          },
          url: "https://maps.app.goo.gl/91iLggdvidxtsFwz7",
        },
        form: {
          title: {
            br: "Vamos conversar",
            us: "Let's talk",
          },
          subtitle: {
            br: "Sinta-se a vontade para enviar qualquer dúvida, feedback ou assunto relacionado.",
            us: "Feel free to send any questions, feedback or related matters.",
          },
          badge: {
            br: "Experimental",
            us: "Experimental",
          },
          button: {
            br: "Enviar",
            us: "Send",
          },
          toast: {
            success: {
              title: {
                br: "Feito!",
                us: "Done!",
              },
              description: {
                br: "Sua mensagem foi enviada.",
                us: "Your message was sent.",
              },
            },
            error: {
              title: {
                br: "Erro!",
                us: "Error!",
              },
              description: {
                br: "Algo inexperado aconteceu. Tente novamente.",
                us: "Something unexpected has occurred. Try again.",
              },
            },
          },
          email: {
            title: {
              br: "Nova mensagem",
              us: "New message",
            },
          },
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
            br: "Tecnologias",
            us: "Stacks",
          },
          navigateTo: "tech",
        },
        {
          id: 4,
          text: {
            br: "Experiências",
            us: "Experience",
          },
          navigateTo: "experience",
        },

        {
          id: 5,
          text: {
            br: "Projetos",
            us: "Projects",
          },
          navigateTo: "projects",
        },

        {
          id: 6,
          text: {
            br: "Contatos",
            us: "Contacts",
          },
          navigateTo: "contacts",
        },
      ],
    },
    labels: {
      jobs: {
        accordion: {
          br: "Detalhes",
          us: "Details",
        },
      },
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
        social: {
          br: "Redes sociais",
          us: "Social media",
        },
        contact: {
          phone: {
            br: "Telefone",
            us: "Phone number",
          },
          email: {
            br: "Email",
            us: "Email",
          },
          location: {
            br: "Localização",
            us: "Location",
          },
          form: {
            fields: {
              name: {
                br: "Seu nome",
                us: "Your name",
              },
              email: {
                br: "Seu email",
                us: "Your email",
              },
              message: {
                br: "Sua mensagem",
                us: "Your message",
              },
            },
            toast: {
              success: {
                accordion: {
                  trigger: {
                    br: "Ver detalhes da mensagem",
                    us: "Read message details",
                  },
                  content: {
                    message: {
                      sentBy: {
                        br: "Enviada por:",
                        us: "Sent by:",
                      },
                      sentAt: {
                        br: "Enviada em:",
                        us: "Sent at:",
                      },
                      content: {
                        br: "Conteúdo:",
                        us: "Content:",
                      },
                    },
                  },
                },
              },
              error: {
                accordion: {
                  trigger: {
                    br: "Ver detalhes do erro",
                    us: "Read error details",
                  },
                  content: {
                    error: {
                      br: "Erro:",
                      us: "Error:",
                    },
                  },
                },
              },
            },
          },
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
    functions: {
      sendEmail: {
        subject: {
          prefix: {
            br: "Mensagem via Portfólio",
            us: "Message via Portfolio",
          },
        },
      },
    },
  },
};

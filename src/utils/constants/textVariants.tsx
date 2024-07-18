import { HiMiniCommandLine } from "react-icons/hi2";
import { FaComputer } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import { TfiLinkedin } from "react-icons/tfi";
import { BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";

export const textVariants = {
  sections: {
    welcome: {
      title: {
        main: {
          br: "Seja bem vindo(a)!",
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
            Me chamo <span className="font-semibold">Luis Henrique</span> e sou
            um grande entusiasta do <i>desenvolvimento web</i>. Atualmente,
            desenvolvo aplicações há quase dois anos utilizando ferramentas
            muito difundidas no mercado. Dentre as quais estão HTML, CSS,
            Javascript, Typescript, React, Redux, Next.js, MySQL, GraphQL,
            Apollo Client e Server, Git e GitHub. Ao longo desse portfólio você
            verá mais sobre os meus principais projetos e poderá acessar todos
            que tiver interesse. Aproveite a visita!
          </p>
        ),
        us: (
          <p>
            My name is <span className="font-semibold">Luis Henrique</span> and
            I'm a huge <i>web development</i> enthusiast. Currently, I've been
            developing applications for nearly two years using tools that are
            widespread on the market. These include HTML, CSS, Javascript,
            Typescript, React, Redux, Next.js, MySQL, GraphQL, Apollo Client and
            Server, Git and GitHub. Throughout this portfolio you will see more
            about my main projects and be able to access any projects you are
            interested in. Enjoy your visit!
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
        br: "Clique em qualquer projeto para saber os detalhes",
        us: "Click on any project to learn more details",
      },
      caption: {
        br: "Lista completa no",
        us: "Full list on",
      },
      list: [
        {
          id: uuidv4(),
          title: {
            br: "API View - API",
            us: "API View - API",
          },
          images: {
            path: "/images/projects/api-view-url/",
            list: ["1.png"],
          },
          description: {
            br: "API Web com operações CRUD.",
            us: "Web API with CRUD operations.",
          },
          date: {
            br: "28 Jun. 2024",
            us: "Jun. 28, 204",
          },
          stacks: [6, 13, 12, 11],
          url: "https://api-view-url.vercel.app/",
          repository: "https://github.com/luissshc29/API--api-view",
        },
        {
          id: uuidv4(),
          title: {
            br: "API View - Página Web",
            us: "API View - Webpage",
          },
          images: {
            path: "/images/projects/api-view/",
            list: ["1.png", "2.png", "3.png"],
          },
          description: {
            br: "Interface para uma aplicação CRUD.",
            us: "Interface for CRUD application.",
          },
          date: {
            br: "28 Jun. 2024",
            us: "Jun. 28, 204",
          },
          stacks: [4, 6, 10, 13],
          url: "https://api-view-mu.vercel.app/",
          repository: "https://github.com/luissshc29/api-view",
        },
        {
          id: uuidv4(),
          title: {
            br: "Bike4Cash - Aluguel de bicicletas",
            us: "Bike4Cash - Bike Rentals",
          },
          images: {
            path: "/images/projects/bike4cash/",
            list: ["1.png", "2.png", "3.png"],
          },
          description: {
            br: "Plataforma fictícia de aluguel de bicicletas.",
            us: "Fictional bike rental web platform.",
          },
          date: {
            br: "27 Dez. 2023",
            us: "Dec. 27, 2023",
          },
          stacks: [4, 6, 10, 11],
          url: "https://bike4cash.vercel.app/",
          repository: "https://github.com/luissshc29/bike4cash",
        },
        {
          id: uuidv4(),
          title: {
            br: "Catálogo Unicapas ®",
            us: "Unicapas® catalog",
          },
          images: {
            path: "/images/projects/unicapas/",
            list: ["1.png", "2.png", "3.png"],
          },
          description: {
            br: "Catálogo virtual de produtos de uma empresa.",
            us: "Virtual product showcase of a company.",
          },
          date: {
            br: "25 Out. 2023",
            us: "Oct. 25, 2023",
          },
          stacks: [4, 7, 6],
          url: "https://unicapas.com.br",
        },
        {
          id: uuidv4(),
          title: {
            br: "AuthSystem",
            us: "AuthSystem",
          },
          images: {
            path: "/images/projects/auth-system/",
            list: ["1.png", "2.png"],
          },
          description: {
            br: "Modelo simples de página de login com OAuth.",
            us: "Simple login page model using OAuth.",
          },
          date: {
            br: "14 Dez. 2023",
            us: "Dec. 14, 2023",
          },
          stacks: [4, 6, 10, 11],
          url: "https://auth-system-iota.vercel.app/",
          repository: "https://github.com/luissshc29/Auth-system",
        },
        {
          id: uuidv4(),
          title: {
            br: "Pokédex",
            us: "Pokédex",
          },
          images: {
            path: "/images/projects/pokedex/",
            list: ["1.png", "2.png"],
          },
          description: {
            br: "Pokédex online, com várias informações valiosas sobre Pokémon.",
            us: "Online Pokédex, with lots of valuable information about Pokémon.",
          },
          date: {
            br: "8 Set. 2023",
            us: "Sep. 8, 2023",
          },
          stacks: [3, 7, 6, 10],
          url: "https://pokedex-omega-tan-81.vercel.app/",
          repository: "https://github.com/luissshc29/pokedex",
        },
        {
          id: uuidv4(),
          title: {
            br: "Bloco de notas online",
            us: "Online notepad",
          },
          images: {
            path: "/images/projects/notepad/",
            list: ["1.png"],
          },
          description: {
            br: "Bloco de notas online que guardará suas anotações para sempre.",
            us: "An online notebook that will save your notes forever.",
          },
          date: {
            br: "1 Nov. 2023",
            us: "Nov. 1, 2023",
          },
          stacks: [4, 6, 9, 10],
          url: "https://notepad-luissshc29.vercel.app/",
          repository: "https://github.com/luissshc29/Notepad",
        },
        {
          id: uuidv4(),
          title: {
            br: "Countries Wiki",
            us: "Countries Wiki",
          },
          images: {
            path: "/images/projects/countries-wiki/",
            list: ["1.png", "2.png"],
          },
          description: {
            br: "Enciclopédia de páises, com informações de cada um.",
            us: "Encyclopedia of countries, with information about each one.",
          },
          date: {
            br: "5 Nov. 2023",
            us: "Nov. 5, 2023",
          },
          stacks: [4, 6, 10],
          url: "https://countries-wiki-tau.vercel.app/",
          repository: "https://github.com/luissshc29/Countries-Wiki",
        },
        {
          id: uuidv4(),
          title: {
            br: "React Supplements",
            us: "React Supplements",
          },
          images: {
            path: "/images/projects/react-supplements/",
            list: ["1.png", "2.png", "3.png"],
          },
          description: {
            br: "Loja virtual fictícia de suplementos para musculação chamada React Supplements.",
            us: "Fictional online bodybuilding supplement store called React Supplements.",
          },
          date: {
            br: "2 Ago. 2023",
            us: "Aug. 2, 2023",
          },
          stacks: [3, 6, 7],
          url: "https://react-supplements.vercel.app/",
          repository: "https://github.com/luissshc29/react-supplements",
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
        br: "Sinta-se à vontade para me contatar de algum dos modos abaixo!",
        us: "Feel free to contact me in any of the ways below!",
      },
      info: {
        social: [
          {
            id: 1,
            text: "Linkedin",
            link: "https://www.linkedin.com/in/luis-henrique-6a7425165/",
            component: <TfiLinkedin />,
          },
          {
            id: 2,
            text: "GitHub",
            link: "https://github.com/luissshc29",
            component: <BsGithub />,
          },
          {
            id: 3,
            text: "Instagram",
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
  },
};

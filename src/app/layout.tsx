import type { Metadata } from "next";
import "./globals.css";
import LanguageProvider from "@/utils/context/LanguageContext";
import Footer from "./components/unique/Footer";
import { Toaster } from "@/shadcn/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import HeaderProvider from "@/utils/context/HeaderContext";
import PageLoader from "./components/unique/PageLoader";
import { ThemeProvider } from "@/utils/context/ThemeContext";

export const metadata: Metadata = {
  title: "Luis Henrique | Desenvolvedor Web",
  description:
    "Desenvolvedor Web com experiência em HTML5, CSS3, Javascript, Typescript, React, Next.js, MySQL, GraphQL, Apollo, Git e GitHub. Especialista na criação de websites responsivos e aplicações escaláveis, focando em SEO, desempenho e acessibilidade. Habilidades em desenvolvimento front-end com Next.js e Typescript, e back-end com Node.js e MySQL. Integração de APIs REST e GraphQL em projetos complexos. Explore meu portfólio para ver como posso ajudar a melhorar sua presença online.",
  authors: [{ name: "Luis Henrique", url: "https://luishenrique-dev.com.br/" }],
  keywords: [
    "HTML5",
    "HTML",
    "CSS3",
    "CSS",
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "MySQL",
    "GraphQL",
    "Apollo",
    "Apollo Client",
    "Apollo server",
    "Git",
    "GitHub",
    "Portfólio",
    "Desenvolvedor",
    "Developer",
    "Desenvolvimento Web",
    "Front-end",
    "Back-end",
    "SEO",
    "Desempenho Web",
    "Acessibilidade",
    "Websites Responsivos",
    "Escalabilidade",
    "Node.js",
    "APIs REST",
    "Integração de APIs",
    "GraphQL API",
    "Desenvolvedor Full Stack",
    "Next.js Developer",
    "Typescript Developer",
    "MySQL Database",
    "Web Performance"
  ],
  applicationName: 'Portfólio Luis Henrique - Desenvolvedor Web',
  creator: 'Luis Henrique',
  publisher: 'Vercel',
  alternates: {canonical: 'https://luishenrique-dev.com.br/'},
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://luishenrique-dev.com.br/",
    title: "Luis Henrique | Desenvolvedor Web",
    description: "Desenvolvedor web com expertise em HTML5, CSS3, React, Next.js e integração de APIs. Especialista em SEO, acessibilidade e performance de websites.",
    siteName: "Portfólio Luis Henrique - Desenvolvedor Web",
    images: [{
      url: "https://i.imgur.com/5B1LJNs.png",
    }],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />
        <meta
          name="google-site-verification"
          content="5WYCOXw59AxMbUclhEquVd7hbceqzxZRztDtehQ5NVs"
        />
      </head>
      <LanguageProvider>
        <HeaderProvider>
          <body className="relative bg-white font-text text-black dark:bg-bg-primary dark:text-white">
            <ThemeProvider>
              <PageLoader>
                {children}
                <Toaster />
                <Footer />
              </PageLoader>

              <Analytics />
              <SpeedInsights />
            </ThemeProvider>
          </body>
        </HeaderProvider>
      </LanguageProvider>
    </html>
  );
}

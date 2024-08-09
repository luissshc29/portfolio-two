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

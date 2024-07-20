import type { Metadata } from "next";
import "./globals.css";
import LanguageProvider from "@/utils/context/LanguageContext";
import Footer from "./components/unique/Footer";
import { Toaster } from "@/shadcn/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import HeaderProvider from "@/utils/context/HeaderContext";
import PageLoader from "./components/unique/PageLoader";

export const metadata: Metadata = {
  title: "Luis Henrique | Desenvolvedor Web",
  description:
    "Desenvolvedor Web com experiência em HTML, CSS, Javascript, Typescript, React, Redux, Next.js, MySQL, GraphQL, Apollo Client e Server, Git e GitHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <head>
        <meta
          name="google-site-verification"
          content="5WYCOXw59AxMbUclhEquVd7hbceqzxZRztDtehQ5NVs"
        />
        <link rel="shortcut icon" href="/images/shortcut-icon.png" />
      </head>
      <LanguageProvider>
        <HeaderProvider>
          <body className="dark relative bg-bg-primary font-text">
            <PageLoader>
              {children}
              <Toaster />
              <Footer />
            </PageLoader>

            <Analytics />
            <SpeedInsights />
          </body>
        </HeaderProvider>
      </LanguageProvider>
    </html>
  );
}

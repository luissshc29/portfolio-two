import type { Metadata } from "next";
import "./globals.css";
import LanguageProvider from "@/utils/context/LanguageContext";
import Footer from "./components/unique/Footer";
import { Toaster } from "@/shadcn/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import HeaderProvider from "@/utils/context/HeaderContext";

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
      <LanguageProvider>
        <HeaderProvider>
          <body className="dark relative bg-bg-primary font-text">
            {children}
            <Toaster />
            <Footer />
            <Analytics />
            <SpeedInsights />
          </body>
        </HeaderProvider>
      </LanguageProvider>
    </html>
  );
}

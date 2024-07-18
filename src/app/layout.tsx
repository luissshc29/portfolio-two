import type { Metadata } from "next";
import "./globals.css";
import LanguageProvider from "@/utils/context/Language";
import Footer from "./components/unique/Footer";
import { Toaster } from "@/shadcn/components/ui/toaster";

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
        <body className="dark bg-bg-primary font-text">
          {children}

          <Toaster />
          <Footer />
        </body>
      </LanguageProvider>
    </html>
  );
}

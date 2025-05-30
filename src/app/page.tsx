import React from "react";
import About from "./sections/About";
import Welcome from "./sections/Welcome";
import Language from "./sections/Language";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contacts from "./sections/Contacts";
import ThemeSelector from "./components/unique/ThemeSelector";
import Footer from "./components/unique/Footer";
import Tech from "./sections/Tech";

export default function Home() {
  return (
    <div
      className="max-w-screen flex w-screen flex-col justify-between gap-4"
      vaul-drawer-wrapper=""
    >
      <div>
        <ThemeSelector />
        <Welcome />
        <Language />
        <About />
        <Tech />
        <Experience />
        <Projects />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}

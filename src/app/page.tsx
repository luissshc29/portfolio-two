import React from "react";
import About from "./sections/About";
import Welcome from "./sections/Welcome";
import Language from "./sections/Language";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contacts from "./sections/Contacts";

export default function Home() {
  return (
    <>
      <Welcome />
      <Language />
      <About />
      <Experience />
      <Projects />
      <Contacts />
    </>
  );
}

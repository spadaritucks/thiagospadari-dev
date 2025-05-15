import { NavBar } from "@/components/navbar/component";
import { AboutMe } from "@/components/about-me/component";
import { Skills } from "@/components/skills/component";
import { Projects } from "@/components/projects/component";
import { Main } from "@/components/main/component";
import { Suspense } from "react";


export default function Home() {
  return (
    <>
      <NavBar />
      <Main id="home" />
      <AboutMe id="about" />
      <Skills id="skills" />
      <Suspense>
        <Projects id="projects" />
      </Suspense>


    </>
  );
}

'use client'

import { NavBar } from "@/components/navbar/component";
import { Main } from "../components/main/component";
import { AboutMe } from "@/components/about-me/component";
import { Skills } from "@/components/skills/component";
import { Projects } from "@/components/projects/component";


export default function Home() {
  return (
    <>
      <NavBar />
      <Main/>
      <AboutMe/>
      <Skills/>
      <Projects/>


    </>
  );
}

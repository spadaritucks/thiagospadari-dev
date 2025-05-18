import { NavBar } from "@/components/navbar/component";
import { Skills } from "@/components/skills/component";
import { Projects } from "@/components/projects/component";
import { Main } from "@/components/main/component";
import { Suspense } from "react";
import { Contact } from "@/components/contact/component";




export default function Home() {

  
  return (
    <>
      
      <NavBar />
      <Main id="about-me" />
      <Skills id="skills" />
      <Suspense>
        <Projects id="projects" />
      </Suspense>
      <Contact id="contact"/>


    </>
  );
}

import { AuthBar } from "@/components/authbar/component";
import ProjectsPanel from "./ProjectPanel/component";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos | Thiago Spadari Dev",
};


export default function ProjectsPage() {

  return (
    <>
      <AuthBar />
      <Suspense>
        <ProjectsPanel />
      </Suspense>
    </>
  )
}
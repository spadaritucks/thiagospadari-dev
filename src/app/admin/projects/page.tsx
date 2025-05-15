import { AuthBar } from "@/components/authbar/component";
import ProjectsPanel from "./ProjectPanel/component";
import { Suspense } from "react";




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
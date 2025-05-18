import { AuthBar } from "@/components/authbar/component"
import SkillsPanel from "./SkillsPanel/component"
import { Suspense } from "react"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Habilidades | Thiago Spadari Dev",
};


export default function SkillsPage() {

  return (
    <>
      <AuthBar />
      <Suspense>
        <SkillsPanel />
      </Suspense>
    </>
  )
}
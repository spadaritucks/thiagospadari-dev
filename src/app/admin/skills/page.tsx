import { AuthBar } from "@/components/authbar/component"
import SkillsPanel from "./SkillsPanel/component"
import { Suspense } from "react"


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

import { AuthBar } from "@/components/authbar/component";
import { Suspense } from "react";
import UsersPanel from "./UsersPanel/component";

export default function UsersPage() {

  return (
    <>
      <AuthBar />
      <Suspense>
        <UsersPanel />
      </Suspense>
    </>
  )
}

import { AuthBar } from "@/components/authbar/component";
import { Suspense } from "react";
import UsersPanel from "./UsersPanel/component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usuarios | Thiago Spadari Dev",
};


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
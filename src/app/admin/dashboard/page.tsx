import { AuthBar } from "@/components/authbar/component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel de Controle | Thiago Spadari Dev",
};

export default function DashboardPage () {

 

    return(
        <>
          <AuthBar/>
        </>
    )
}
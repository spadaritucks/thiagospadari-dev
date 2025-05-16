import { AuthBar } from "@/components/authbar/component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Thiago Spadari Dev",
};

export default function DashboardPage () {

 

    return(
        <>
          <AuthBar/>
        </>
    )
}
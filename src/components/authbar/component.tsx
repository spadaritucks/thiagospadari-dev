'use client'
import Link from "next/link";
import { NavContent, NavLinksContent } from "./styles";
import { BicepsFlexed, FlaskConical, LayoutDashboard, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../button/component";
import { api } from "@/lib/axios";

export function AuthBar() {
    const pathname = usePathname()

    async function Logout () {
        await api.delete("/sign-out")
    }

    return (
        <NavContent>
            <NavLinksContent>
                <Link href="/admin/dashboard" aria-current={pathname === '/dashboard' ? 'page' : undefined}><LayoutDashboard/> Dashboard</Link>
                <Link href="/admin/users" aria-current={pathname === '/users' ? 'page' : undefined}><User /> Users</Link>
                <Link href="/admin/projects" aria-current={pathname === '/projects' ? 'page' : undefined}><FlaskConical /> Projects</Link>
                <Link href="/admin/skills" aria-current={pathname === '/skills' ? 'page' : undefined}><BicepsFlexed /> Skills</Link>
            </NavLinksContent>
            <Button variant="destructive" onClick={Logout}>Logout</Button>
        </NavContent>
    )
}
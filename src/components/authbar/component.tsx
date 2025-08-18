'use client'
import Link from "next/link";
import { NavContent, NavLinksContent } from "./styles";
import { BicepsFlexed, FlaskConical, LayoutDashboard, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../button/component";
import { api } from "@/lib/axios";

export function AuthBar() {
    const pathname = usePathname()
    const router = useRouter()

    async function Logout () {
        await api.delete("/sign-out")
        await router.push('/login')
    }

    return (
        <NavContent>
            <NavLinksContent>
                <Link href="/admin/dashboard" aria-current={pathname === '/admin/dashboard' ? 'page' : undefined}><LayoutDashboard/> Control Panel</Link>
                <Link href="/admin/users" aria-current={pathname === '/admin/users' ? 'page' : undefined}><User /> Users</Link>
                <Link href="/admin/projects" aria-current={pathname === '/admin/projects' ? 'page' : undefined}><FlaskConical /> Projects</Link>
                <Link href="/admin/skills" aria-current={pathname === '/admin/skills' ? 'page' : undefined}><BicepsFlexed /> Skills</Link>
            </NavLinksContent>
            <Button variant="destructive" onClick={Logout}>Logout</Button>
        </NavContent>
    )
}
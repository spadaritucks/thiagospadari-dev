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
                <Link href="/admin/dashboard" aria-current={pathname === '/admin/dashboard' ? 'page' : undefined}><LayoutDashboard/> Painel de Controle</Link>
                <Link href="/admin/users" aria-current={pathname === '/admin/users' ? 'page' : undefined}><User /> Usuários</Link>
                <Link href="/admin/projects" aria-current={pathname === '/admin/projects' ? 'page' : undefined}><FlaskConical /> Projetos</Link>
                <Link href="/admin/skills" aria-current={pathname === '/admin/skills' ? 'page' : undefined}><BicepsFlexed /> Habilidades</Link>
            </NavLinksContent>
            <Button variant="destructive" onClick={Logout}>Sair</Button>
        </NavContent>
    )
}
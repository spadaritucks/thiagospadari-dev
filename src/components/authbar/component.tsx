'use client'
import Link from "next/link";
import { ButtonLogout, NavContent, NavLinksContent } from "./styles";
import { BicepsFlexed, FlaskConical, LayoutDashboard, User } from "lucide-react";
import { usePathname } from "next/navigation";


export function AuthBar() {

    const pathname = usePathname()

    return (
        <NavContent>
            <NavLinksContent>
                <Link href="/dashboard" aria-current={pathname === '/dashboard' ? 'page' : undefined}><LayoutDashboard/> Dashboard</Link>
                <Link href="/users" aria-current={pathname === '/users' ? 'page' : undefined}><User /> Users</Link>
                <Link href="/projects" aria-current={pathname === '/projects' ? 'page' : undefined}><FlaskConical /> Projects</Link>
                <Link href="/skills" aria-current={pathname === '/skills' ? 'page' : undefined}><BicepsFlexed /> Skills</Link>
            </NavLinksContent>
            <ButtonLogout>
                Logout
            </ButtonLogout>


        </NavContent>
    )
}
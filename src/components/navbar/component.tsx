'use client'
import Link from "next/link";
import { DevTitle, NavContent, NavLinksContent } from "./styles";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../button/component";
import { usePathname } from "next/navigation";

export function NavBar() {
    const [isOpenMobileNavBar, setIsOpenMobileNabBar] = useState<boolean>(false)

    function ClickOpenMobileNavBar() {
        setIsOpenMobileNabBar(!isOpenMobileNavBar)
    }
    const pathname = usePathname()

    return (
        <NavContent>
            <DevTitle>
                <h1>Thiago Spadari Dev</h1>
                <p>Full-Stack & Moblie Developer</p>
            </DevTitle>
            <NavLinksContent className={`${isOpenMobileNavBar ? 'open' : ''}`}>
                {pathname === "/" ?
                    <>
                        <Link href="#home">Home</Link>
                        <Link href="#skills">Skills</Link>
                        <Link href="#projects">Projects</Link>
                    </> : null}
                <Button name="Login Admin" variant="primary">
                    <Link href="/login">Login Admin</Link>
                </Button>
                {pathname === "/login" ?
                    <>
                        <Button name="Voltar" variant="destructive">
                            <Link href="/">Voltar</Link>
                        </Button>
                    </> : null
                }
            </NavLinksContent>


            {isOpenMobileNavBar && pathname === "/" ? <X onClick={ClickOpenMobileNavBar} /> : <Menu onClick={ClickOpenMobileNavBar} />}
        </NavContent>
    )
}
'use client'
import Link from "next/link";
import { DevTitle, NavContent, NavLinksContent, NavRoot } from "./styles";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../button/component";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/logo-thiago-spadari-dev-not-background.png"

export function NavBar() {
    const [isOpenMobileNavBar, setIsOpenMobileNabBar] = useState<boolean>(false)

    function ClickOpenMobileNavBar() {
        setIsOpenMobileNabBar(!isOpenMobileNavBar)
    }
    const pathname = usePathname()

    return (
       <NavRoot>
         <NavContent>
            <DevTitle>
                <Image src={logo} width={70} height={70} alt=""></Image>
                <h1>Thiago Spadari DEV <br/> <span style={{fontSize : 12, fontWeight : 400}}>Full Stack Developer</span></h1>
            </DevTitle>
            <NavLinksContent className={`${isOpenMobileNavBar ? 'open' : ''}`}>
                {pathname === "/" ?
                    <>
                        <Link href="#about-me">About Me</Link>
                        <Link href="#skills">Skills</Link>
                        <Link href="#projects">Projects</Link>
                        <Link href="#contact">Contact</Link>
                    </> : null}
                {pathname === "/login" ?
                    <>
                        <Button name="Back" variant="destructive">
                            <Link href="/">Back</Link>
                        </Button>
                    </> : null
                }
            </NavLinksContent>


            {isOpenMobileNavBar && pathname === "/" ? <X onClick={ClickOpenMobileNavBar} /> : <Menu onClick={ClickOpenMobileNavBar} />}
        </NavContent>
       </NavRoot>
    )
}
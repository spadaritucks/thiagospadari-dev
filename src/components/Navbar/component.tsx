'use client'
import Link from "next/link";
import { ButtonAdminPanelLogin, DevTitle, NavContent, NavLinksContent } from "./styles";
import { useState } from "react";
import { Menu, X } from "lucide-react";


export function NavBar() {

    const [isOpenMobileNavBar, setIsOpenMobileNabBar] = useState<boolean>(false)

    function ClickOpenMobileNavBar () {
        setIsOpenMobileNabBar(!isOpenMobileNavBar)
    }

    return (
        <NavContent>
            <DevTitle>
                <h1>Thiago Spadari Dev</h1>
                <p>Full-Stack & Moblie Developer</p>
            </DevTitle>
            <NavLinksContent className={`${isOpenMobileNavBar ? 'open' : ''}`}>
                <Link href="">Home</Link>
                <Link href="">About me</Link>
                <Link href="">Projects</Link>
            </NavLinksContent>
            <ButtonAdminPanelLogin>
                <Link href="/login">Login Admin</Link>
            </ButtonAdminPanelLogin>

            {isOpenMobileNavBar ? <X onClick={ClickOpenMobileNavBar} /> : <Menu onClick={ClickOpenMobileNavBar}/>}
        </NavContent>
    )
}
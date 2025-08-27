import { usePathname } from "next/navigation";
import { MobileNavLinksAnimation, MobileNavLinksContent } from "./styles";
import Link from "next/link";
import { Button } from "../button/component";

interface MobileNavBarProps {
    isOpenMobileNavBar: boolean;
}

    export default function MobileNavigationBar({isOpenMobileNavBar}: MobileNavBarProps) {


    const pathname = usePathname()
    console.log(isOpenMobileNavBar)

    return (

        <MobileNavLinksAnimation className={`${isOpenMobileNavBar ? "open" : ""}`}>
            <MobileNavLinksContent>
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
            </MobileNavLinksContent>
        </MobileNavLinksAnimation>
    )
}
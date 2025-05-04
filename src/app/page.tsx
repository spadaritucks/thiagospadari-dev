"use client"

import { NavBar } from "@/components/Navbar/component";
import { HomeContent, HomeLinksContent, HomeTextContent } from "./styles";
import Link from "next/link";
import Image from "next/image";
import githubImage from "@/assets/github.png"
import whatsappImage from "@/assets/whatsaap.png"
import linkedinImage from "@/assets/linkedin.png"

export default function Home() {
  return (
    <>
      <NavBar />

      <HomeContent>
        <HomeTextContent>
          <h1>Full Stack Developer/Mobile</h1>
          <p>Sou o Thiago Spadari, um desenvolvedor de software autônomo com mais de 2 anos de experiência em 
            criar soluções digitais eficientes e personalizadas. Especializado em tecnologias como React, Next.js, Laravel e 
            API REST, ajudo empresas e empreendedores a transformar suas ideias em aplicações 
            web e mobile robustas e escaláveis.</p>
        </HomeTextContent>
        <HomeLinksContent>
          <Link href="https://github.com/spadaritucks"><Image src={githubImage} alt=""></Image></Link>
          <Link href="https://linkedin.com/in/thiago-spadari"><Image src={linkedinImage} alt=""></Image></Link>
          <Link href="https://wa.me/11960599793"><Image src={whatsappImage} alt=""></Image></Link>
        </HomeLinksContent>
      </HomeContent>

    </>
  );
}

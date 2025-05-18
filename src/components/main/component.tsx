'use client'
import Link from "next/link";
import Image from "next/image";
import thiagoImage from '@/assets/thiago.jpg'
import { HomeAboutMeContent, HomeAboutMeTextContent, HomeButtonContent, HomeContent, HomeMainContent, HomeTextContent } from "./styles";
import { Button } from "../button/component";

interface MainProps {
  id?: string;
}

export function Main({ id }: MainProps) {
  return (
    <HomeContent id={id}>
      <HomeMainContent>
        <HomeTextContent>
          <h2>
            <span className="typing typing-1">
              Olá, eu sou o&nbsp; <span style={{ color: "#3b82f6" }}>Thiago Spadari</span>
            </span>
          </h2>
          <p>
            <span className="typing typing-2">Full Stack Developer | Java | React | NextJS | NodeJS
            </span>
          </p>
          <HomeButtonContent>

            <Button name="Download CV" variant="primary">
              <Link href="">Download CV</Link>
            </Button>
            <Button name="Entre em Contato" variant="secondary">
              <Link href="https://wa.me/5511860599793">Entre em Contato</Link>
            </Button>
          </HomeButtonContent>
        </HomeTextContent>
        <Link href="https://github.com/spadaritucks"><Image src={thiagoImage} alt="" /></Link>
      </HomeMainContent>
      <HomeAboutMeContent>
        <h2>Sobre mim</h2>
        <HomeAboutMeTextContent>
          <p>Hi, I'm Thiago Spadari, a web developer focused on both front-end and back-end development,
            combining the creation of responsive UI/UX interfaces with
            the integration and maintenance of APIs and their business logic.</p>
        </HomeAboutMeTextContent>
      </HomeAboutMeContent>
    </HomeContent>


  )
}
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
    <HomeContent
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      id={id}>
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
              <Link href="/CV-THIAGO_SPADARI_19_05_2025.pdf">Download CV</Link>
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
          <p>Olá, sou Thiago Spadari, desenvolvedor web com foco em front-end e back-end.
            Atuo na criação de interfaces responsivas com foco em UI/UX, aliando a experiência do usuário à performance,
            além de trabalhar na integração e manutenção de APIs, garantindo a aplicação das regras de negócio e a escalabilidade
            dos sistemas.</p>
        </HomeAboutMeTextContent>
      </HomeAboutMeContent>
    </HomeContent>


  )
}
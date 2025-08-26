'use client'
import Link from "next/link";
import Image from "next/image";
import thiagoImage from '@/assets/thiago.jpg'
import { HomeAboutMeContent, HomeAboutMeTextContent, HomeButtonContent, HomeContent, HomeMainContent, HomeTextContent } from "./styles";
import { Button } from "../button/component";
import { NavBar } from "../navbar/component";


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
      <video autoPlay loop muted playsInline className="back-video" src="./background-tsd.mp4" />
  
      <HomeMainContent>

        <HomeTextContent>
          <h2>
            <span className="typing typing-1">
              Hello, I'm&nbsp; <span style={{ color: "#3b82f6" }}>Thiago Spadari</span>
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
            <Button name="Get in Touch" variant="secondary">
              <Link href="https://wa.me/5511860599793">Get in Touch</Link>
            </Button>
          </HomeButtonContent>
        </HomeTextContent>
        <Link href="https://github.com/spadaritucks"><Image src={thiagoImage} alt="" /></Link>
      </HomeMainContent>
      <HomeAboutMeContent>
        <h2>About Me</h2>
        <HomeAboutMeTextContent>
          <p>Hello, I'm Thiago Spadari, a web developer focused on front-end and back-end development.
            I work on creating responsive interfaces with a focus on UI/UX, combining user experience with performance,
            as well as working on API integration and maintenance, ensuring the application of business rules and system scalability.</p>
        </HomeAboutMeTextContent>
      </HomeAboutMeContent>
    </HomeContent>


  )
}
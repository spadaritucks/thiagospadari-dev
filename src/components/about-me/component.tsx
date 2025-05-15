'use client'
import { AboutMeContent, AboutMeTextContent } from "./styles";

interface AboutMeProps {
  id?: string;
}

export function AboutMe({ id }: AboutMeProps) {
    return (
        <AboutMeContent id={id}>
            <h2>About Me</h2>
            <AboutMeTextContent>
                <p>Hi, I'm Thiago Spadari, a web developer focused on both front-end and back-end development,
                    combining the creation of responsive UI/UX interfaces with
                    the integration and maintenance of APIs and their business logic.</p>
            </AboutMeTextContent>
        </AboutMeContent>
    )
}
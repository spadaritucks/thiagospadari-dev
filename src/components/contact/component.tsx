'use client'
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { ContactContainer, ContactContent, ContactItem, ContactSvg } from "./styles";

interface ContactProps {
    id?: string;
}

export function Contact({ id }: ContactProps) {
    return (
        <ContactContent
            id={id}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}

        >
            <h2>Contact</h2>
            <ContactContainer>
                <ContactItem href="https://www.linkedin.com/in/thiago-spadari">
                    <ContactSvg><Linkedin /></ContactSvg>
                    <p>@thiago-spadari</p>
                </ContactItem>
                <ContactItem href="https://github.com/spadaritucks">
                    <ContactSvg><Github /></ContactSvg>
                    <p>@spadaritucks</p>
                </ContactItem >
                <ContactItem href="mailto:thiagospadaridev@gmail.com">
                    <ContactSvg><Mail /></ContactSvg>
                    <p>thiagospadaridev@gmail.com</p>
                </ContactItem>
                <ContactItem href="https://wa.me/5511860599793">
                    <ContactSvg><Phone /></ContactSvg>
                    <p>(11) 96059-9793</p>
                </ContactItem>
            </ContactContainer>
        </ContactContent>
    );
}
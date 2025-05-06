import Image from "next/image"
import { ProjectCardContent, ProjectCardDetailsContent, ProjectCardFooter, ProjectCardSkillsContent, SeeMoreButton } from "./styles"
import igniteCall from '@/assets/ignite call.png'
import typescript from '@/assets/typescript.png'

type Skills = {
    name: string
    image: string
}[]

interface ProjectCardProps {
    title: string
    background: string
    skills: Skills
}




export function ProjectCard() {

    return (
        <ProjectCardContent>
            <Image src={igniteCall} alt="" />
            <ProjectCardDetailsContent>
                <h3>Ignite Call</h3>
                <ProjectCardSkillsContent>
                   <Image src={typescript} alt=""/>
                   <Image src={typescript} alt=""/>
                   <Image src={typescript} alt=""/>
                </ProjectCardSkillsContent>
            </ProjectCardDetailsContent>
            <ProjectCardFooter>
                <p>23 de Janeiro de 2025</p>
                <SeeMoreButton>See More</SeeMoreButton>
            </ProjectCardFooter>
        </ProjectCardContent>
    )
}
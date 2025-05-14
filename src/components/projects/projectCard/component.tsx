import Image from "next/image"
import { ProjectCardContent, ProjectCardDetailsContent, ProjectCardFooter, ProjectCardSkillsContent, SeeMoreButton } from "./styles"
import igniteCall from '@/assets/ignite call.png'
import typescript from '@/assets/typescript.png'

type Skills = {
    id: string
    name: string
    image: string
}[]

interface ProjectCardProps {
    id: string
    name: string
    image: string
    skills: Skills
}

export function ProjectCard({id, name, image, skills} : ProjectCardProps) {
    return (
        <ProjectCardContent key={id}>
            <img src={image} alt="" />
            <ProjectCardDetailsContent>
                <h3>{name}</h3>
                <ProjectCardSkillsContent>
                   {skills.map((skill)=> <img key={skill.id} src={skill.image} />)}
                </ProjectCardSkillsContent>
            </ProjectCardDetailsContent>
            <ProjectCardFooter>
                <p>23 de Janeiro de 2025</p>
                <SeeMoreButton>See More</SeeMoreButton>
            </ProjectCardFooter>
        </ProjectCardContent>
    )
}
import Image from "next/image"
import { ProjectCardContent, ProjectCardDetailsContent, ProjectCardFooter, ProjectCardSkillsContent, ProjectDetails, ProjectDetailsContent, ProjectDetailsFooter, ProjectDetailsImageContent, ProjectDetailsText, SeeMoreButton } from "./styles"
import igniteCall from '@/assets/ignite call.png'
import typescript from '@/assets/typescript.png'
import { useModal } from "@/context/ModalContext"
import { Button } from "@/components/button/component"

type Skills = {
    id: string
    name: string
    image: string
}[]

interface ProjectCardProps {
    id: string
    name: string
    image: string
    description: string
    skills: Skills
}

export function ProjectCard({ id, name, image, description, skills }: ProjectCardProps) {

    const { hideModal, openModal } = useModal()

    return (
        <ProjectCardContent key={id}>
            <img src={image} alt="" />
            <ProjectCardDetailsContent>
                <h3>{name}</h3>
                <ProjectCardSkillsContent>
                    {skills.map((skill) => <img key={skill.id} src={skill.image} />)}
                </ProjectCardSkillsContent>
            </ProjectCardDetailsContent>
            <ProjectCardFooter>
                <p>23 de Janeiro de 2025</p>
                <SeeMoreButton onClick={() => {
                    openModal("lg", "Detalhes do Projeto",
                        <ProjectDetailsContent>
                            <ProjectDetails>
                                <ProjectDetailsImageContent>
                                    <img src={image} alt="" />
                                </ProjectDetailsImageContent>

                                <ProjectDetailsText>
                                    <h1>{name}</h1>
                                    <p>{description}</p>
                                </ProjectDetailsText>
                            </ProjectDetails>
                            <ProjectDetailsFooter>
                                <Button variant="primary" >Repositorio GIT</Button>
                                <Button variant="primary" >Link da Aplicação</Button>
                            </ProjectDetailsFooter>
                        </ProjectDetailsContent>

                    )
                }}>See More</SeeMoreButton>
            </ProjectCardFooter>
        </ProjectCardContent>
    )
}
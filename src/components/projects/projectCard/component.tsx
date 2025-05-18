import Image from "next/image"
import { ProjectCardContent, ProjectCardDetailsContent, ProjectCardFooter, ProjectCardSkillsContent, ProjectDetails, ProjectDetailsContent, ProjectDetailsFooter, ProjectDetailsImageContent, ProjectDetailsText, SeeMoreButton } from "./styles"
import igniteCall from '@/assets/ignite call.png'
import typescript from '@/assets/typescript.png'
import { useModal } from "@/context/ModalContext"
import { Button } from "@/components/button/component"
import Link from "next/link"

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
    project_date: string
    type: string
    git_repository?: string;
    project_link?: string;
    skills: Skills
}

export function ProjectCard({ id, name, image, description, skills, project_link, project_date, type, git_repository }: ProjectCardProps) {

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
                <p>{new Date(project_date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                })}</p>
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
                                    <p><strong>Tipo do Projeto :</strong> {type}</p>
                                </ProjectDetailsText>
                            </ProjectDetails>
                            <ProjectDetailsFooter>
                                <Button variant="primary" disabled={!git_repository} >
                                    {!git_repository ? "Repositorio GIT" : <Link href={git_repository}>Repositorio GIT</Link>}
                                </Button>
                                <Button variant="secondary" disabled={!project_link} >
                                    {!project_link ? "Link do Projeto" : <Link href={project_link}>Link do Projeto</Link>}
                                </Button>
                            </ProjectDetailsFooter>
                        </ProjectDetailsContent>

                    )
                }}>Veja Mais</SeeMoreButton>
            </ProjectCardFooter>
        </ProjectCardContent>
    )
}
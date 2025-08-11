'use client'
import { useQuery } from "@tanstack/react-query";
import { ProjectCard } from "./projectCard/component";
import { ProjectsContainer, ProjectsContainers, ProjectsContent } from "./styles";
import { api } from "@/lib/axios";
import { GetPaginatedProjectsResponse } from "@/RequestTypes/GetPaginatedProjectsResponse";
import { z } from "zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Pagination } from "../pagination/component";
import { ProjectCardSkeleton } from "./projectCardSkeleton/component";

interface ProjectsProps {
    id?: string;
}

export function Projects({ id }: ProjectsProps) {

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const pageIndexHighlights = z.coerce
        .number()
        .transform(page => page - 1)
        .parse(searchParams.get('pageHighlights') ?? "1");

    const pageIndexPersonal = z.coerce
        .number()
        .transform(page => page - 1)
        .parse(searchParams.get('pagePersonal') ?? "1");

    const { data: highlights, isLoading: highlightsIsLoading } = useQuery({
        queryFn: async () => {
            const response = await api.get<GetPaginatedProjectsResponse>(`/projects/get-projects`, {
                params: {
                    pageIndexHighlights,
                    pageSize: 6,
                    priority: 1
                }
            })
            return response.data
        },
        queryKey: ['highlightsProjects', pageIndexHighlights]
    })

    const { data: personal, isLoading: personalIsLoading } = useQuery({
        queryFn: async () => {
            const response = await api.get<GetPaginatedProjectsResponse>(`/projects/get-projects`, {
                params: {
                    pageIndexPersonal,
                    pageSize: 6,
                    priority: 2
                }
            })
            return response.data
        },
        queryKey: ['personalProjects', pageIndexPersonal]
    })

    function handlePaginateHighlights(newPageIndex: number) {
        const params = new URLSearchParams(searchParams.toString());
        params.set('pageHighlights', (newPageIndex + 1).toString());
        router.replace(`${pathname}?${params.toString()}#projects`);
    }
    
    function handlePaginatePersonal(newPageIndex: number) {
        const params = new URLSearchParams(searchParams.toString());
        params.set('pagePersonal', (newPageIndex + 1).toString());
        router.replace(`${pathname}?${params.toString()}#projects`);
    }

    return (
        <ProjectsContent id={id}>

            <ProjectsContainers>
                <h2>Destaques | Projetos mais Relevantes</h2>
                <ProjectsContainer>
                    {highlightsIsLoading && <ProjectCardSkeleton />}
                    {highlights?.projects && highlights.projects.length > 0 ? highlights.projects.map((project, index) =>
                        <ProjectCard
                            id={project.id}
                            name={project.name}
                            image={project.image}
                            description={project.description}
                            type={project.type}
                            project_date={project.project_date}
                            git_repository={project.git_repository}
                            project_link={project.project_link}
                            skills={project.ProjectsSkills.map(projectSkill => projectSkill.skills)} key={index} />) : null}
                </ProjectsContainer>

                {highlights?.meta && <Pagination
                    onPageChange={handlePaginateHighlights}
                    pageIndex={pageIndexHighlights}
                    totalCount={highlights.meta.totalCount}
                    perPage={highlights.meta.perPage}
                />}

                <h2>Projetos Pessoais | Experimentais</h2>
                <ProjectsContainer>
                    {personalIsLoading && <ProjectCardSkeleton />}
                    {personal?.projects && personal.projects.length > 0 ? personal.projects.map((project, index) =>
                        <ProjectCard
                            id={project.id}
                            name={project.name}
                            image={project.image}
                            description={project.description}
                            type={project.type}
                            project_date={project.project_date}
                            git_repository={project.git_repository}
                            project_link={project.project_link}
                            skills={project.ProjectsSkills.map(projectSkill => projectSkill.skills)} key={index} />) : null}
                </ProjectsContainer>

                {personal?.meta && <Pagination
                    onPageChange={handlePaginatePersonal}
                    pageIndex={pageIndexPersonal}
                    totalCount={personal.meta.totalCount}
                    perPage={personal.meta.perPage}
                />}
            </ProjectsContainers>

        </ProjectsContent>
    )
}
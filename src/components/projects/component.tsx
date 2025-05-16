'use client'
import { useQuery } from "@tanstack/react-query";
import { ProjectCard } from "./projectCard/component";
import { ProjectsContainer, ProjectsContent } from "./styles";
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

    const pageIndex = z.coerce
        .number()
        .transform(page => page - 1)
        .parse(searchParams.get('pageIndex') ?? "1")


    const { data, isLoading } = useQuery({
        queryKey: ['projects', pageIndex],
        queryFn: async () => {
            const response = await api.get<GetPaginatedProjectsResponse>("/projects/get-projects", {
                params: {
                    pageIndex,
                    pageSize: 6
                }
            })

            return response.data
        }
    })

    function HandlePaginate(newPageIndex: number) {
        const params = new URLSearchParams(searchParams.toString())
        params.set('pageIndex', (newPageIndex + 1).toString())

        router.replace(`${pathname}?${params.toString()}`);

    }

    return (
        <ProjectsContent id={id}>
            <h2>Projects</h2>
            <ProjectsContainer>
                {isLoading && <ProjectCardSkeleton/>}
                {data?.projects && data.projects.length > 0 ? data.projects.map((project, index) =>
                    <ProjectCard
                        id={project.id}
                        name={project.name}
                        image={project.image}
                        description={project.description}
                        git_repository={project.git_repository}
                        project_link={project.project_link}
                        skills={project.ProjectsSkills.map(projectSkill => projectSkill.skills)} key={index} />) : null}
            </ProjectsContainer>

            {data?.meta && <Pagination
                onPageChange={HandlePaginate}
                pageIndex={pageIndex}
                totalCount={data.meta.totalCount}
                perPage={data.meta.perPage}
            />}
        </ProjectsContent>
    )
}
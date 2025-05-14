'use client'
import { useQuery } from "@tanstack/react-query";
import { ProjectCard } from "./projectCard/component";
import { ProjectsContainer, ProjectsContent } from "./styles";
import { api } from "@/lib/axios";
import { GetPaginatedProjectsResponse } from "@/RequestTypes/GetPaginatedProjectsResponse";
import { z } from "zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Pagination } from "../pagination/component";

export function Projects() {

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const pageIndex = z.coerce
        .number()
        .transform(page => page - 1)
        .parse(searchParams.get('pageIndex') ?? "1")


    const { data } = useQuery({
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
        <ProjectsContent>
            <h2>Projects</h2>
            <ProjectsContainer>
                {data?.projects && data.projects.length > 0 ? data.projects.map((project, index) =>
                    <ProjectCard
                        id={project.id}
                        name={project.name}
                        image={project.image}
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
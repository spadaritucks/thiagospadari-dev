'use client'
import { AuthBar } from "@/components/authbar/component";
import { DeleteOptions, ProjectsContent, ProjectsHeader, ProjectsManagerContent, ProjectsTable, TableActions } from "./styles";
import { useModal } from "@/context/ModalContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ProjectForm } from "./ProjectForm/component";
import { api } from "@/lib/axios";
import { Pagination } from "@/components/pagination/component";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";
import { Button } from "@/components/button/component";
import { toast } from "sonner";
import { GetPaginatedProjectsResponse } from "@/RequestTypes/GetPaginatedProjectsResponse";
import { ProjectSkeleton } from "./ProjectSkeleton/component";
import Link from "next/link";



export default function ProjectsPanel() {

    const { openModal, hideModal } = useModal()


    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const queryClient = useQueryClient()

    const pageIndex = z.coerce
        .number()
        .transform(page => page - 1)
        .parse(searchParams.get('pageIndex') ?? "1")


    const { data, isLoading } = useQuery({
        queryFn: async () => {
            const response = await api.get<GetPaginatedProjectsResponse>(`/projects/get-projects`, {
                params: {
                    pageIndex,
                    pageSize: 10
                }
            })
            return response.data
        },
        queryKey: ['projects', pageIndex]
    })

    function HandlePaginate(newPageIndex: number) {
        const params = new URLSearchParams(searchParams.toString())
        params.set('pageIndex', (newPageIndex + 1).toString())

        router.replace(`${pathname}?${params.toString()}`);

    }

    function HandleConfirmDeleteProject(id: string) {
        openModal("sm", "Tem a certeza de que deseja excluir?",
            <DeleteOptions>
                <Button variant="destructive" onClick={() => HandleDeleteProject(id)}>Sim</Button>
                <Button variant="secondary" onClick={hideModal} >Não</Button>
            </DeleteOptions>
        )
    }

    async function HandleDeleteProject(id: string) {
        try {
            const response = await api.delete(`/projects/delete-projects/${id}`)

            toast.success(response.data.message)

            queryClient.invalidateQueries({
                queryKey: ["projects"],
                exact: false
            })

            hideModal()
        } catch (error: any) {
            toast.error(error.response.data.message)
        }
    }




    return (
        <ProjectsContent>
            <ProjectsHeader>
                <h2>Projetos</h2>
                <Button variant="primary" onClick={() => {
                    openModal("md", "Novo Projeto",
                        <ProjectForm />
                    )
                }}>
                    Novo Projeto
                </Button>
            </ProjectsHeader>
            <ProjectsManagerContent>
                <ProjectsTable>
                    <thead>
                        <tr>
                            <th>Identificador</th>
                            <th>Imagem</th>
                            <th>Nome</th>
                            <th>Tipo</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading && <ProjectSkeleton />}
                        {data?.projects && data.projects.map((project, index) => {
                            return (
                                <tr key={index}>
                                    <td>{project.id}</td>
                                    <td><img src={project.image} width={80} height={40} alt="" /></td>
                                    <td>{project.name}</td>
                                    <td>{project.type}</td>
                                    <TableActions>
                                        <Button variant="primary" disabled={!project.git_repository} >
                                            {!project.git_repository ? "Github" : <Link href={project.git_repository}>Github</Link>}
                                        </Button>
                                        <Button variant="secondary" onClick={() => {
                                            openModal("md", "Descrição", <p>{project.description}</p>)
                                        }}>Descrição</Button>
                                        <Button variant="destructive" onClick={() => HandleConfirmDeleteProject(project.id)}>Excluir</Button>
                                    </TableActions>
                                </tr>
                            )
                        })}
                    </tbody>
                </ProjectsTable>
                {data?.meta && <Pagination
                    onPageChange={HandlePaginate}
                    pageIndex={pageIndex}
                    totalCount={data.meta.totalCount}
                    perPage={data.meta.perPage}
                />}
            </ProjectsManagerContent>
        </ProjectsContent>
    )
}
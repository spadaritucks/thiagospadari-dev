'use client'
import { AuthBar } from "@/components/authbar/component";
import { DeleteOptions, ProjectsContent, ProjectsHeader, ProjectsManagerContent, ProjectsTable, TableActions } from "./styles";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ProjectForm } from "./ProjectForm/component";
import { api } from "@/lib/axios";
import { Pagination } from "@/components/pagination/component";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";
import { Button } from "@/components/button/component";
import { toast } from "sonner";
import { GetPaginatedProjectsResponse } from "@/RequestTypes/GetPaginatedProjectsResponse";





export default function ProjectsPage() {

  const { openModal, hideModal } = useModal()


  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const queryClient = useQueryClient()

  const pageIndex = z.coerce
    .number()
    .transform(page => page - 1)
    .parse(searchParams.get('pageIndex') ?? "1")


  const { data } = useQuery({
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
    openModal("Tem certeza que deseja excluir?",
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
        exact : false
      })
      
      hideModal()
    } catch (error: any) {
       toast.error(error.response.data.message)
    }
  }




  return (
    <>
      <AuthBar />
      <ProjectsContent>
        <ProjectsHeader>
          <h2>Projects</h2>
          <Button variant="primary" onClick={() => {
            openModal("New Project",
              <ProjectForm />
            )
          }}>
            New Project
          </Button>
        </ProjectsHeader>
        <ProjectsManagerContent>
          <ProjectsTable>
            <thead>
              <tr>
                <th>Identifier</th>
                <th>Image</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.projects && data.projects.length > 0 ? data.projects.map((project, index) => {
                return (
                  <tr key={index}>
                    <td>{project.id}</td>
                    <td><img src={project.image} width={80} height={40} alt="" /></td>
                    <td>{project.name}</td>
                    <TableActions>
                      <Button variant="secondary" onClick={() => {
                        openModal("Description", <p>{project.description}</p>)
                      }}>Show Description</Button>
                      <Button variant="destructive" onClick={() => HandleConfirmDeleteProject(project.id)}>Delete</Button>
                    </TableActions>
                  </tr>
                )
              }) : <tr><td colSpan={4}>Nenhuma Project Encontrada</td></tr>}
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
    </>
  )
}
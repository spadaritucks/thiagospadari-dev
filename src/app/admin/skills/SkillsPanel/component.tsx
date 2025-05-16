'use client'
import { DeleteOptions, SkillsContent, SkillsHeader, SkillsManagerContent, SkillsTable } from "./styles";
import { useModal } from "@/context/ModalContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { Pagination } from "@/components/pagination/component";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";
import { Button } from "@/components/button/component";
import { toast } from "sonner";
import { GetPaginatedSkillsResponse } from "@/RequestTypes/GetPaginatedSkillsResponse";
import { SkillForm } from "./SkillForm/component";
import { SkillsSkeleton } from "./SkillsSkeleton/component";



export default function SkillsPanel() {

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
      const response = await api.get<GetPaginatedSkillsResponse>(`/skills/get-skills`, {
        params: {
          pageIndex,
          pageSize: 10,
          all : "false"
        }
      })
      return response.data
    },
    queryKey: ['skills', pageIndex]
  })

  function HandlePaginate(newPageIndex: number) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('pageIndex', (newPageIndex + 1).toString())

    router.replace(`${pathname}?${params.toString()}`);

  }

  function HandleConfirmDeleteSkill(id: string) {
    openModal("sm","Tem certeza que deseja excluir?",
      <DeleteOptions>
        <Button variant="destructive" onClick={() => HandleDeleteSkill(id)}>Sim</Button>
        <Button variant="secondary" onClick={hideModal} >Não</Button>
      </DeleteOptions>
    )
  }

  async function HandleDeleteSkill(id: string) {
    try {
      const response = await api.delete(`/skills/delete-skills/${id}`)
      
      toast.success(response.data.message)

      queryClient.invalidateQueries({
        queryKey: ["skills"],
        exact : false
      })
      
      hideModal()
    } catch (error: any) {
       toast.error(error.response.data.message)
    }
  }




  return (
  
      <SkillsContent>
        <SkillsHeader>
          <h2>Skills</h2>
          <Button variant="primary" onClick={() => {
            openModal("sm","New Skill",
              <SkillForm />
            )
          }}>
            New Skill
          </Button>
        </SkillsHeader>
        <SkillsManagerContent>
          <SkillsTable>
            <thead>
              <tr>
                <th>Identifier</th>
                <th>Icon</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && <SkillsSkeleton/>}
              {data?.skills.map((skill, index) => {
                return (
                  <tr key={index}>
                    <td>{skill.id}</td>
                    <td><img src={skill.image} width={40} height={40} alt="" /></td>
                    <td>{skill.name}</td>
                    <td>
                      <Button variant="destructive" onClick={() => HandleConfirmDeleteSkill(skill.id)}>Excluir</Button>
                    </td>
                  </tr>
                )
              }) }
            </tbody>
          </SkillsTable>
          {data?.meta && <Pagination
            onPageChange={HandlePaginate}
            pageIndex={pageIndex}
            totalCount={data.meta.totalCount}
            perPage={data.meta.perPage}
          />}
        </SkillsManagerContent>
      </SkillsContent>

  )
}
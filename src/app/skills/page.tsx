'use client'
import { AuthBar } from "@/components/authbar/component";
import { DeleteSkillButton, NewSkillButton, SkillsContent, SkillsHeader, SkillsManagerContent, SkillsTable } from "./styles";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import { useQuery } from "@tanstack/react-query";
import { SkillForm } from "./SkillForm/component";
import { api } from "@/lib/axios";






export default function SkillsPage() {

  const { openModal, hideModal } = useModal()

  const icon = "https://txyjuoymimdulzyizxpo.supabase.co/storage/v1/object/sign/thiagospadaridev/skills/1746630018344-typescript.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU2OWFkNjcxLTcwZDItNDc3Ny1iZTRiLWE3OWU4OGQ3MTEyNSJ9.eyJ1cmwiOiJ0aGlhZ29zcGFkYXJpZGV2L3NraWxscy8xNzQ2NjMwMDE4MzQ0LXR5cGVzY3JpcHQucG5nIiwiaWF0IjoxNzQ2NzA2MDQ0LCJleHAiOjE3NDczMTA4NDR9.etjDzevR-Q9vMlfJOc_u32SyVBv9WWmuuGIaCfCdTSI"

  const {data: skills} = useQuery({
    queryFn: async () => {
      const response = await api.get(`/skills/get-skills`,{
        params: {
          pageIndex : 1,
          pageSize : 10
        }
      })
      return response.data
    },
    queryKey: ['skills']
  })

 

  return (
    <>
      <AuthBar />
      <SkillsContent>
        <SkillsHeader>
          <h2>Skills</h2>
          <NewSkillButton onClick={() => {
            openModal("New Skill",
              <SkillForm/>
            )
          }}>New Skill</NewSkillButton>
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
              {Array.from({ length: 10 }).map((_, index) => {
                return (
                  <tr key={index}>
                    <td>d9bfc457-b89b-4d93-88d7-28ab7e294e60</td>
                    <td><img src={icon} width={40} height={40} alt="" /></td>
                    <td>Typescript</td>
                    <td>
                      <DeleteSkillButton>Deletar</DeleteSkillButton>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </SkillsTable>
        </SkillsManagerContent>
      </SkillsContent>
    </>
  )
}
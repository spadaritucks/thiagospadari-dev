'use client'
import { DeleteOptions, UsersContent, UsersHeader, UsersManagerContent, UsersTable } from "./styles";
import { useModal } from "@/context/ModalContext";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { UserForm } from "./UsersForm/component";
import { api } from "@/lib/axios";
import { Pagination } from "@/components/pagination/component";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";
import { Button } from "@/components/button/component";
import { toast } from "sonner";
import { GetPaginatedUsersResponse } from "@/RequestTypes/GetPaginatedUsers";
import { UsersSkeleton } from "./UsersSkeleton/component";



export default function UsersPanel() {

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
      const response = await api.get<GetPaginatedUsersResponse>(`/users/get-users`, {
        params: {
          pageIndex,
          pageSize: 10,
          all: "false"
        }
      })
      return response.data
    },
    queryKey: ['users', pageIndex]
  })

  function HandlePaginate(newPageIndex: number) {
    const params = new URLSearchParams(searchParams.toString())
    params.set('pageIndex', (newPageIndex + 1).toString())

    router.replace(`${pathname}?${params.toString()}`);

  }

  function HandleConfirmDeleteUser(id: string) {
    openModal("sm","Tem certeza que deseja excluir?",
      <DeleteOptions>
        <Button variant="destructive" onClick={() => HandleDeleteUser(id)}>Sim</Button>
        <Button variant="secondary" onClick={hideModal} >Não</Button>
      </DeleteOptions>
    )
  }

  async function HandleDeleteUser(id: string) {
    try {
      const response = await api.delete(`/users/delete-user/${id}`)

      toast.success(response.data.message)

      queryClient.invalidateQueries({
        queryKey: ["users"],
        exact: false
      })

      hideModal()
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }




  return (

      <UsersContent>
        <UsersHeader>
          <h2>Users</h2>
          <Button variant="primary" onClick={() => {
            openModal("sm","New User",
              <UserForm />
            )
          }}>
            New User
          </Button>
        </UsersHeader>
        <UsersManagerContent>
          <UsersTable>
            <thead>
              <tr>
                <th>Identifier</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && <UsersSkeleton />}
              {data?.users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <Button variant="destructive" onClick={() => HandleConfirmDeleteUser(user.id)}>Excluir</Button>
                    </td>
                  </tr>
                )
              }) }
            </tbody>
          </UsersTable>
          {data?.meta && <Pagination
            onPageChange={HandlePaginate}
            pageIndex={pageIndex}
            totalCount={data.meta.totalCount}
            perPage={data.meta.perPage}
          />}
        </UsersManagerContent>
      </UsersContent>

  )
}
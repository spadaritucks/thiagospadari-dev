export interface GetPaginatedUsersResponse {
    // Contetudo Retornado
    users: {
        id: string
        name: string
        email: string
    }[]
    //Metadados
    meta: {
        pageIndex: number; // Numero da Pagina
        perPage: number // Numero de Items por Pagina
        totalCount: number // Total de Items
    }
}
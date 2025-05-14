export interface GetPaginatedUsersResponse {
    users : {
        id: string
        name: string
        email: string
    }[]
    meta:{
        pageIndex: number;
        perPage: number
        totalCount: number
    }
}
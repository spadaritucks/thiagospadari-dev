export interface GetPaginatedSkillsResponse {
    skills: {
      id: string
      name: string
      image: string
    }[]
  
    meta: {
      pageIndex: number
      perPage: number
      totalCount: number
    }
  }
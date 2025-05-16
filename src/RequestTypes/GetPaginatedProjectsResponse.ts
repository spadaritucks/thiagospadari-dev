export interface GetPaginatedProjectsResponse {
  projects: {
    id: string;
    name: string;
    image: string;
    description: string;
    git_repository? : string;
    project_link? : string;
    ProjectsSkills: {
      id: string;
      project_id: string;
      skill_id: string;
      skills: {
        id: string;
        name: string;
        image: string;
      };
    }[];
  }[];
  
    meta: {
      pageIndex: number
      perPage: number
      totalCount: number
    }
  }
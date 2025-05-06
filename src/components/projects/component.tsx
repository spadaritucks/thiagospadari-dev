import { ProjectCard } from "./projectCard/component";
import { ProjectsContainer, ProjectsContent } from "./styles";

export function Projects () {

    return(
        <ProjectsContent>
            <h2>Projects</h2>
            <ProjectsContainer>
                {Array.from({length: 12}).map((_,index)=>{
                    return <ProjectCard key={index}/>
                })}
            </ProjectsContainer>
        </ProjectsContent>
    )
}
import { SkillsCard } from "./skillsCard/component";
import { SkillsContent, SkillsGridContent } from "./styles";


export function Skills () {

    return(
        <SkillsContent>
            <h2>Skills</h2>
            <SkillsGridContent>
                {Array.from({length: 18}).map((_,index)=>{
                    return <SkillsCard key={index} />
                })}
            </SkillsGridContent>
        </SkillsContent>

    )
}
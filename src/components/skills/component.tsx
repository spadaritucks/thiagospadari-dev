'use client'
import { useQuery } from "@tanstack/react-query";
import { SkillsCard } from "./skillsCard/component";
import { SkillsContent, SkillsGridContent } from "./styles";
import { api } from "@/lib/axios";

interface SkillsProps {
  id?: string;
}

export function Skills({ id }: SkillsProps) {
    const {data} = useQuery({
        queryFn : async () => {
            const response = await api.get<GetAllSkills>('/skills/get-skills',{
                params : {
                    all : "true"
                }
            })
            return response.data
        },
        queryKey : ['skills']
    })

    return(
        <SkillsContent id={id}>
            <h2>Skills</h2>
            <SkillsGridContent>
                {data?.skills && data.skills.length > 0 ? 
                data.skills.map((skill, index) => <SkillsCard name={skill.name} image={skill.image} key={index} />) : null}
            </SkillsGridContent>
        </SkillsContent>
    )
}
'use client'
import { useQuery } from "@tanstack/react-query";
import { SkillsCard } from "./skillsCard/component";
import { SkillsContent, SkillsGridContent, SkillsTitle } from "./styles";
import { api } from "@/lib/axios";
import { SkillsCardSkeleton } from "./skillsCardSkeleton/component";
import Separator from "../separator/component";


interface SkillsProps {
    id?: string;
}

export function Skills({ id }: SkillsProps) 
{
    const { data, isLoading } = useQuery({
        queryFn: async () => {
            const response = await api.get<GetAllSkills>('/skills/get-skills', {
                params: {
                    all: "true"
                }
            })
            return response.data
        },
        queryKey: ['skills']
    })

    return (
        <SkillsContent id={id}>
          
            <SkillsTitle>
                <h2>Skills</h2>
                <Separator color="#1e3a8a" width="80%" height="4px" />
            </SkillsTitle>
            <SkillsGridContent
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
                {isLoading && <SkillsCardSkeleton />}
                {data?.skills && data.skills.length > 0 ?
                    data.skills.map((skill, index) => <SkillsCard name={skill.name} image={skill.image} key={index} />) : null}
            </SkillsGridContent>
             
        </SkillsContent>
    )
}

import Image from "next/image"
import { SkillsCardContent } from "./styles"
import typescript from '@/assets/typescript.png'

interface SkillsCardProps {
    name: string
    image: string
}

export function SkillsCard({ name, image }: SkillsCardProps) {

    return (
        <SkillsCardContent>
            <img src={image} alt="" width={50} height={50} />
            <p>{name}</p>
        </SkillsCardContent>
    )
}

import Image from "next/image"
import { SkillsCardContent } from "./styles"
import typescript from '@/assets/typescript.png'

interface SkillsCardProps {
    name: string
    image: string
}

export function SkillsCard({ name, image }: SkillsCardProps) {

    return (
        <SkillsCardContent
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
            <img src={image} alt="" width={50} height={50} />
            <p>{name}</p>
        </SkillsCardContent>
    )
}
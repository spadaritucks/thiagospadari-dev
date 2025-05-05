import Image from "next/image"
import { SkillsCardContent } from "./styles"
import typescript from '@/assets/typescript.png'

interface SkillsCardProps {
    name: string
    image: string
}

export function SkillsCard () {

    return(
        <SkillsCardContent>
            <Image src={typescript} alt="" width={50} height={50}/>
            <p>Typescript</p>
        </SkillsCardContent>
    )
}
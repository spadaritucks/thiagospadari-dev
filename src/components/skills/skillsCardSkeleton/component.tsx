import { SkillsCardSkeletonContent } from "./styles";


export function SkillsCardSkeleton () {
    return(
        <>
            {Array.from({ length: 20 }).map((_, index) => (
                <SkillsCardSkeletonContent key={index} />
            ))}
        </>
    )
}
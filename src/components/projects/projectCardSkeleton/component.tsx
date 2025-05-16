import { ProjectCardSkeletonContent } from "./styles";

export function ProjectCardSkeleton() {

    return (
        <>
            {Array.from({ length: 6 }).map((_, index) => (
                <ProjectCardSkeletonContent key={index} />
            ))}
        </>
    )

}
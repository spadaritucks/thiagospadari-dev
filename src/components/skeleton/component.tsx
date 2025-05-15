import { SkeletonContent } from "./styles"

type Size = "sm" | "md" | "lg"

interface SkeletonProps {
    size: Size
}

export function Skeleton ({size} : SkeletonProps) {

    return (
        <SkeletonContent className={size} />
    )
}
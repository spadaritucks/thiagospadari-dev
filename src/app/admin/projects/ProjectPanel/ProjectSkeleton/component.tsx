'use client'
import { Skeleton } from "@/components/skeleton/component"
import { TableActions } from "../styles"


export function ProjectSkeleton() {

    return Array.from({ length: 10 }).map((_, i) => {

        return (
            <tr key={i}>
                <td><Skeleton size="lg"/></td>
                <td><Skeleton size="lg"/></td>
                <td><Skeleton size="md"/></td>
                <TableActions >
                    <Skeleton size="lg"/>
                </TableActions>
            </tr>
        )
    })
}
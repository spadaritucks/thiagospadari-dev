import { Skeleton } from "@/components/skeleton/component"


export function UsersSkeleton() {

    return Array.from({ length: 10 }).map((_, i) => {

        return (
            <tr key={i}>
                <td><Skeleton size="lg"/></td>
                <td><Skeleton size="lg"/></td>
                <td><Skeleton size="md"/></td>
                <td >
                    <Skeleton size="md"/>
                </td>
            </tr>
        )
    })
}
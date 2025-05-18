import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest) {

    const searchParams = req.nextUrl.searchParams
    const pageIndex = Number(searchParams.get('pageIndex'))
    const pageSize = Number(searchParams.get('pageSize'))


    const [data, totalCount] = await Promise.all([
        prisma.projects.findMany({
            skip: pageIndex * pageSize,
            take: pageSize,
            orderBy: {
                // Isso vai colocar "Empresarial" primeiro se for ordenado alfabeticamente
                type: 'asc',
            },
            include: {
                ProjectsSkills: {
                    include: {
                        skills: true
                    }
                }
            }
        },
        ),
        prisma.projects.count()
    ])
   
    const sortedProjects = data.sort((a, b) => {
        if (a.type === 'Empresarial' && b.type !== 'Empresarial') return -1
        if (a.type !== 'Empresarial' && b.type === 'Empresarial') return 1
        return 0 // mantém a ordem entre itens do mesmo tipo
    })



    return NextResponse.json(
        {
            projects: sortedProjects,
            meta: {
                pageIndex,
                perPage : pageSize,
                totalCount
            }

        },
        { status: 200 })

}
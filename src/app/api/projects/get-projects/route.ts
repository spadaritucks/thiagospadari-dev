import { prisma } from "@/lib/prisma";
import { Underdog } from "next/font/google";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest) {

    const searchParams = req.nextUrl.searchParams
    const pageHighlightsParam = searchParams.get('pageIndexHighlights');
    const pagePersonalParam = searchParams.get('pageIndexPersonal');
    const pageAllParam = searchParams.get('pageIndexAll');
    
    const pageHighlights = pageHighlightsParam !== null ? Number(pageHighlightsParam) : undefined;
    const pagePersonal = pagePersonalParam !== null ? Number(pagePersonalParam) : undefined;
    const pageAll = pageAllParam !== null ? Number(pageAllParam) : undefined;
    
    const pageIndex = pageHighlights !== undefined ? pageHighlights : pagePersonal !== undefined ? pagePersonal :
    pageAll !== undefined ? pageAll : 0;
    
    const pageSize = Number(searchParams.get('pageSize'))
    

    const priorityParam = searchParams.get('priority');
    const priority = priorityParam !== null ? Number(priorityParam) : undefined;



    const [data, totalCount] = await Promise.all([
        prisma.projects.findMany({
            skip: pageIndex * pageSize,
            take: pageSize,
            where : {
                priority 
            },
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
        prisma.projects.count({
            where : {
                priority
            } 
        })
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



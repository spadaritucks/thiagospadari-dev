import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest) {

    const searchParams  = req.nextUrl.searchParams
    const pageIndex = Number(searchParams.get('pageIndex'))
    const pageSize = Number(searchParams.get('pageSize'))

    
    const data = await prisma.projects.findMany({
        skip : pageIndex * pageSize,
        take : pageSize,
        include: {
            ProjectsSkills : {
                include : {
                    skills : true
                }
            }
        
        } 
        
    })

    return NextResponse.json({ projects : data}, {status : 200})
    
}
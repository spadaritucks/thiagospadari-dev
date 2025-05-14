import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams

    const all = searchParams.get('all') === "true"

    if(all){
        const data = await prisma.skills.findMany()
        return NextResponse.json({skills : data},{status : 200})
    }


    const pageIndex = Number(searchParams.get('pageIndex')) || 0
    const pageSize = Number(searchParams.get('pageSize')) || 10
    

    const [data, totalCount] = await Promise.all([
        prisma.skills.findMany({
            skip: pageIndex * pageSize,
            take: pageSize
        }),
        prisma.skills.count()
    ])

    return NextResponse.json({
        skills: data,
        meta: {
            pageIndex,
            perPage: pageSize,
            totalCount
        }
    }, { status: 200 })
}
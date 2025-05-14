import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest) {

    const searchParams  = req.nextUrl.searchParams
    const pageIndex = Number(searchParams.get('pageIndex'))
    const pageSize = Number(searchParams.get('pageSize'))

    const [data, totalCount] = await Promise.all([
         prisma.users.findMany({
            skip : pageIndex * pageSize,
            take : pageSize
        }),
        prisma.users.count()
    ])
    
    

    return NextResponse.json({
        users: data,
        meta: {
            pageIndex,
            perPage : pageSize,
            totalCount
        }
    }, {status : 200})
    
}
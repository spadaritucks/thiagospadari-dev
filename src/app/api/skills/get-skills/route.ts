import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest) {

    const searchParams  = req.nextUrl.searchParams
    const pageIndex = Number(searchParams.get('pageIndex'))
    const pageSize = Number(searchParams.get('pageSize'))

    
    const data = await prisma.skills.findMany({
        skip : (pageIndex - 1) * pageSize,
        take : pageSize
    })

    return NextResponse.json({data}, {status : 200})
    
}
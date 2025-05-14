import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";



export async function DELETE(req: NextRequest, {params} : {params : Promise<{id : string}>}) {

    const id = (await params).id

    const project = await prisma.projects.findFirst({
        where : {
            id
        }
    })

    if(!project){
        return NextResponse.json({message : "Projeto não existe"}, {status: 400})
    }

    await prisma.projects.delete({
        where : {
            id
        }
    })

    return NextResponse.json({message : "Projeto excluido com sucesso"},{status : 200})
    
    
}
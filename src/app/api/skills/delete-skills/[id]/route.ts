import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";



export async function DELETE(req: NextRequest, {params} : {params : Promise<{id : string}>}) {

    const id = (await params).id

    const skill = await prisma.skills.findFirst({
        where : {
            id
        }
    })

    if(!skill){
        return NextResponse.json({message : "Skill não existe"}, {status: 400})
    }

    await prisma.skills.delete({
        where : {
            id
        }
    })

    return NextResponse.json({message : "Skill Excluida com Sucesso"},{status : 200})
    
    
}
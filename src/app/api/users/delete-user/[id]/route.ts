import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";



export async function DELETE(req: NextRequest, {params} : {params : Promise<{id : string}>}) {

    const id = (await params).id

    const user = await prisma.users.findFirst({
        where : {
            id
        }
    })

    if(!user){
        return NextResponse.json({message : "Usuario não existe"}, {status: 400})
    }

    await prisma.users.delete({
        where : {
            id
        }
    })

    return NextResponse.json({message : "Usuario excluido com sucesso"},{status : 200})
    
    
}
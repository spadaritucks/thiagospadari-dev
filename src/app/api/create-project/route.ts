
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";
import { GetImageProperties } from "@/utils/GetImageProperties";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const formData =  await req.formData()
    const name = formData.get('name')
    const skill_id = formData.get('skill_id')
    const image = formData.get('image') as File
    const description = formData.get('description')

    if(!name || !description || !skill_id ){
        return NextResponse.json({message  : "Os dados não foram enviados"}, {status : 400})
    }

    const project = await prisma.projects.findFirst({
        where: {
            name : name.toString()
        }
    })

    if(project){
        return NextResponse.json({message  : "Esse projeto já existe"}, {status : 400})
    }

    const {buffer,fileType, filename} = await GetImageProperties(image)
    
    await supabase.storage.from('thiagospadaridev').upload(`projects/${filename}`, buffer,{
        contentType: fileType,
        upsert : true
    })

    const {data: {publicUrl}} = supabase.storage.from("thiagospadaridev").getPublicUrl(`projects/${filename}`)
  
    await prisma.projects.create({
        data: {
            name: name.toString(),
            image : publicUrl,
            description: description.toString(),
            ProjectsSkills : {
                create : {
                    skill_id : skill_id.toString(),
                }
            }
        },
        
    })

    return NextResponse.json({message : "Projeto criado com sucesso"}, {status : 201})
    
    
}
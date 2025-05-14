
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";
import { GetImageProperties } from "@/utils/GetImageProperties";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const formData =  await req.formData()
    const name = formData.get('name')
    const skills_id_unparsed = formData.get('skills_id')
    const skills = JSON.parse(skills_id_unparsed as string) as string[]
    const image = formData.get('image') as File
    const description = formData.get('description')

    if(!name || !description || !skills ){
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
  
   const createdProject =  await prisma.projects.create({
        data: {
            name: name.toString(),
            image : publicUrl,
            description: description.toString(),
        },
        
    })
    
    await prisma.projectsSkills.createMany({
        data: skills.map((skillId) => ({
            project_id : createdProject.id,
            skill_id : skillId
        }))
    })

    

    return NextResponse.json({message : "Projeto criado com sucesso"}, {status : 201})
  
    
}

import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";
import { GetImageProperties } from "@/utils/GetImageProperties";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const formData =  await req.formData()
    const name = formData.get('name');

    if(!name){
        return NextResponse.json({message : "Os dados não foram enviados"}, {status : 400})
    }
   
    const skill = await prisma.skills.findFirst({
        where: {
            name : name.toString(),
        }
    })

    if(skill){
        return NextResponse.json({message : "Essa skill já existe"}, {status : 400})
    }

    const image = formData.get('image') as File 
    const {buffer, fileType, filename} = await GetImageProperties(image);

     await supabase.storage.from("thiagospadaridev").upload(`skills/${filename}`, buffer,{
        contentType : fileType,
        upsert: true
    });

    const {data : {publicUrl} } = supabase.storage.from('thiagospadaridev').getPublicUrl(`skills/${filename}`);

    await prisma.skills.create({
        data: {
            name : name.toString() ,
            image : publicUrl
        }
    })


    return NextResponse.json({message : "Skill Criada com sucesso"}, {status : 201})
  
    
    
}
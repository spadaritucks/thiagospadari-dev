
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";
import { GetImageProperties } from "@/utils/GetImageProperties";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const formData = await req.formData()
    const name = formData.get('name')
    const skills_id_unparsed = formData.get('skills_id')
    const skills = JSON.parse(skills_id_unparsed as string) as string[]
    const image = formData.get('image') as File
    const description = formData.get('description')
    const git_repository = formData.get('git_repository')
    const project_link = formData.get('project_link')

    if (!name || !description || !skills) {
        return NextResponse.json({ message: "Os dados não foram enviados" }, { status: 400 })
    }

    const project = await prisma.projects.findFirst({
        where: {
            name: name.toString()
        }
    })

    if (project) {
        return NextResponse.json({ message: "Esse projeto já existe" }, { status: 400 })
    }

    const { buffer, fileType, filename } = await GetImageProperties(image)

    const upload = await supabase.storage.from('thiagospadaridev').upload(`projects/${filename}`, buffer, {
        contentType: fileType,
        upsert: true
    })

    if (upload.error) {
        return NextResponse.json(
            {
                message: "Não foi possivel realizar o upload da imagem ",
                error : upload.error
            }, { status: 400 })
    }

    const { data: { publicUrl } } = supabase.storage.from("thiagospadaridev").getPublicUrl(`projects/${filename}`)

    const createdProject = await prisma.projects.create({
        data: {
            name: name.toString(),
            image: publicUrl,
            description: description.toString(),
            git_repository: git_repository?.toString() ?? null,
            project_link: project_link?.toString() ?? null
        },

    })

    await prisma.projectsSkills.createMany({
        data: skills.map((skillId) => ({
            project_id: createdProject.id,
            skill_id: skillId
        }))
    })



    return NextResponse.json({ message: "Projeto criado com sucesso" }, { status: 201 })


}
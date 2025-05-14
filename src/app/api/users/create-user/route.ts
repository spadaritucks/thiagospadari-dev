
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { genSalt, hash } from "bcrypt-ts";
import { sign } from "jsonwebtoken";


export async function POST(req: NextRequest) {

    const data = await req.json()

    const user = await prisma.users.findFirst({
        where: {
            email: data.email
        }
    })


    if (user) {
        return NextResponse.json({ message: "O Usuario já existe" }, { status: 400 })
    }

    const salt = await genSalt(10);
    const hashedPassword = await hash(data.password, salt)
    await prisma.users.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashedPassword
        }
    })

 


    return NextResponse.json({ message: 'Usuario criado com sucesso' }, { status: 201 });




}
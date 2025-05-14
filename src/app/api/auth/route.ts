
import { prisma } from "@/lib/prisma";
import { compare, genSalt, hash } from "bcrypt-ts";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const data = await req.json()


    const user = await prisma.users.findFirst({
        where: {
            email: data.email
        }
    })

    if (!user) {
        return NextResponse.json({ message: "Usuario não existe" }, { status: 401 })
    }

    const verifyPassword = await compare(data.password, user.password)

    if (!verifyPassword) {
        return NextResponse.json({ message: "Senha incorreta" }, { status: 401 })
    }
    const secret = String(process.env.SECRET_KEY)
    const token = sign({ id: user.id }, secret, { expiresIn: "1d" })

    const serialised = serialize("token", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        path: "/"
    })

    const res =  NextResponse.json({ token: token }, { status: 200 })
    res.headers.set("Set-Cookie", serialised)
    return res

}
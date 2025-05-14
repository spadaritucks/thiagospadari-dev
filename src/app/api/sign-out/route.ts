import { NextRequest, NextResponse } from "next/server";

export async function DELETE() {

    const res = NextResponse.json({}, {status : 200})
    res.cookies.set({
        name: "token",
        value: "",
        httpOnly: true,
        path: "/",
        maxAge: 0, // expira imediatamente
      });
    return res

}
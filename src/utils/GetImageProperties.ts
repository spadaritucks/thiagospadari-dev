import { NextResponse } from "next/server"

export const GetImageProperties = async (image : File) => {


    if(!image){
        throw new Error('Nenhum arquivo enviado');
    }

    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filename = `${Date.now()}-${image.name}`;
    const fileType = image.type;

    return {
        buffer : buffer,
        filename : filename,
        fileType : fileType
    }
   
}
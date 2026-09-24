import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        const memes = await prisma.meme.findMany({
            orderBy: {createdAt: "desc"}
        })

        return NextResponse.json({success: true, data: memes})
    }catch(error){
        const message = error instanceof Error ? error.message : "Unknown error!"
        console.error(message)
        return NextResponse.json({error: message},{status: 500})
    }
}
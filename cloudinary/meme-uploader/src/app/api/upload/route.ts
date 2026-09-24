import cloudinary from "@/lib/cloudinary";
import prisma from "@/lib/prisma";
import { UploadApiResponse } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "File not found!" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "meme-uploader",
        },
        (error, result) => {
          if (error) reject(error);
          else if(result) resolve(result);
          else reject(new Error("Cloudinary upload returned no result"));
        },
      );

      stream.end(buffer);
    });

    const memes = await prisma.meme.create({
      data: {url: uploadResult?.secure_url}
    })

    return NextResponse.json({success:true, data: memes})
  } catch (error) {
    const  message = error instanceof Error? error.message : "Unknown error!"
    console.error("Upload error:",message);
    return NextResponse.json({error: message},{status: 500})
  }
}

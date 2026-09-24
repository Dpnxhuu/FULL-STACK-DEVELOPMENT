import cloudinary from "@/lib/cloudinary";
import type { UploadApiResponse } from "cloudinary";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ error: "File not found" }, { status: 400 });
  }

  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResult = await new Promise<UploadApiResponse>(
      (resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "my-avatar" },
          (error, result) => {
            if (error) reject(error);
            else if (result) resolve(result);
            else reject(new Error("Cloudinary upload returned no result"));
          },
        );
        stream.end(buffer);
      },
    );

    const { secure_url } = uploadResult;

    return NextResponse.json({ success: true, secure_url }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error!";
    console.error("Error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

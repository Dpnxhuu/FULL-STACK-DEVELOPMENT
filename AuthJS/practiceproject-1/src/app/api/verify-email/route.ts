import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try{
    const { searchParams } = new URL(req.url);

  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Token missing!" }, { status: 404 });
  }

  const verificationToken = await prisma.verificationToken.findUnique({
    where: { token },
  });

  if (!verificationToken || verificationToken.expires < new Date()) {
    return NextResponse.json(
      { error: "Token invalid ya expire ho gaya" },
      { status: 400 },
    );
  }

  await prisma.user.update({
    where: { email: verificationToken.identifier },
    data: { emailVerified: new Date() },
  });

  await prisma.verificationToken.delete({
    where: {
        identifier_token:{
            identifier: verificationToken.identifier,
            token: verificationToken.token,
        }
    }
  })

  return NextResponse.redirect(new URL("/?verified=true", req.url))
  }catch(error){
    const message = error instanceof Error? error.message : "Unknown error";
    console.error(error)
    return NextResponse.json({error: message}, {status: 500})
  }
}

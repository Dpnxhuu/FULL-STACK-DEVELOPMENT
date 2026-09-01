import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Token not found!" }, { status: 404 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string, sessionVersion: number
    };

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, name: true, email: true, sessionVersion: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found!" }, { status: 404 });
    }

    if(user.sessionVersion !== decoded.sessionVersion){
      return NextResponse.json({error: "Session expired, login again!"}, {status: 401})
    }

    const {sessionVersion, ...freshUser} = user;

    return NextResponse.json({ user: freshUser }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

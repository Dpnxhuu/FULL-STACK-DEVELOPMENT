import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { z } from "zod";

const tokenSchema = z.object({
  id: z.number(),
  tokenVersion: z.number(),
});

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Not logged in" }, { status: 401 });
  }

  try {
    const decoded = tokenSchema.parse(
      jwt.verify(token, process.env.JWT_SECRET!),
    );

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: { id: true, name: true, email: true, tokenVersion: true },
    });

    if (!user || user.tokenVersion !== decoded.tokenVersion) {
      return NextResponse.json(
        { error: "Session expired, please login again" },
        { status: 401 },
      );
    }

    return NextResponse.json({ name: user.name, email: user.email });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}

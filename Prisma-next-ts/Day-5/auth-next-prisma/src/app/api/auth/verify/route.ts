import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { z } from "zod";

const tokenSchema = z.object({
  id: z.number(),
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Token missing" }, { status: 400 });
  }

  try {
    const decoded = tokenSchema.parse(
      jwt.verify(token, process.env.JWT_SECRET!),
    );

    const dbUser = await prisma.user.update({
      where: { id: decoded.id },
      data: { isVerified: true },
    });

    const loginToken = jwt.sign(
      {
        id: dbUser.id,
        tokenVersion: dbUser.tokenVersion,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" },
    );

    const response = NextResponse.redirect(new URL("/home", req.url));

    response.cookies.set("token", loginToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 400 },
    );
  }
}

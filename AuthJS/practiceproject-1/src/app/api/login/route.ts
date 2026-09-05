import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { z } from "zod";
import jwt from "jsonwebtoken"

const userSchema = z.object({
  email: z.string().email("Inavalid email!"),
  password: z.string().min(6, "Password too short!"),
});

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const result = userSchema.safeParse(data);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0]?.message },
        { status: 400 },
      );
    }

    const { email, password } = result.data;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 400 },
      );
    }

    if(!user.emailVerified){
      return NextResponse.json({error: "Email not verified!"},{status: 401})
    }

    const isMatch = await bcrypt.compare(password, user.password!);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid email or Password" },
        { status: 400 },
      );
    }

    const token = jwt.sign({ userId: user.id, sessionVersion: user.sessionVersion }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });

    const response = NextResponse.json(
      { message: "Login successfull!" },
      { status: 200 },
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    });

    return response;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

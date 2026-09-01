import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { z } from "zod";
import crypto from "crypto";
import { sendVerificationEmail } from "@/lib/mail";

const userSchema = z.object({
  name: z.string().min(3, "Name too short."),
  email: z.string().email("Invalid email!"),
  password: z.string().min(6, "Password must be 6+ char!"),
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

    const { name, email, password } = result.data;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser)
      return NextResponse.json(
        { error: "User already exist." },
        { status: 409 },
      );

    const hassPass = await bcrypt.hash(password, 10);

    const createdUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hassPass,
      },
    });

    const token = crypto.randomUUID();
    const expires = new Date(Date.now() + 1000 * 60 * 60);

    await prisma.verificationToken.create({
      data: {
        identifier: email,
        token,
        expires,
      },
    });

    await sendVerificationEmail(email, token);

    return NextResponse.json(
      {
        message: "Signup successful, email verify karo",
        userId: createdUser.id,
      },
      { status: 201 },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

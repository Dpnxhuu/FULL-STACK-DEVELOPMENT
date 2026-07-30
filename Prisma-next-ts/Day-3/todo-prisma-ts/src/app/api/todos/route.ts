import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const todos = await prisma.todos.findMany();
    return NextResponse.json(todos);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch todos" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const todo = await prisma.todos.create({
      data: { text: body.text },
    });
    return NextResponse.json(todo);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create todo" },
      { status: 500 }
    );
  }
}
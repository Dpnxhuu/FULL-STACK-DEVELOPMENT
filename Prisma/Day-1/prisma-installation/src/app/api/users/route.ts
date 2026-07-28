import {prisma} from "@/lib/prisma"

export async function POST(request: Request) {
  const body: { name: string; email: string } = await request.json()

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email
    }
  })

  return Response.json(newUser)
}

export async function DELETE(request: Request) {
  const body: { id: number } = await request.json()

  const deletedUser = await prisma.user.delete({
    where: { id: body.id }
  })

  return Response.json(deletedUser)
}
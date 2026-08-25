import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@/generated/prisma/client";

function createPrismaClient(){
    const adapter = new PrismaMariaDb({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASS,
        connectionLimit: 10,
    })
    return new PrismaClient({adapter})
}

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma?? createPrismaClient();

if(process.env.NODE_ENV !== "production"){
    globalForPrisma.prisma = prisma;
}

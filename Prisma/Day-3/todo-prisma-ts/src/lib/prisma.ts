import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { PrismaClient } from '../generated/prisma/client'

const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Dpnxhuu@0579",
  database: "prisma_learning"
})

export const prisma = new PrismaClient({ adapter })
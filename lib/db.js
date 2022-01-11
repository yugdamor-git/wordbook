import { PrismaClient } from '@prisma/client'

console.log(global.prisma)

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'],
  })

console.log(global.prisma)
console.log("database init")

if (process.env.NODE_ENV !== 'production') global.prisma = prisma
// This file is used to seed the database with data in development

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

enum Role {
  Admin = 1,
  User = 2,
}

async function main() {
  await prisma.user.create({
    data: {
      username: 'admin',
      password: 'admin',
      role: Role.Admin,
    },
  })
}

main()

// This file is used to seed the database with data in development

import { PrismaClient } from '@prisma/client'
import { config } from 'dotenv'
import { md5Hash } from '@/lib'

config()

const prisma = new PrismaClient()

enum Role {
  Admin = 1,
  User = 2,
}

async function main() {
  await prisma.user.create({
    data: {
      username: 'admin',
      password: md5Hash(`${process.env.SALT_PWD}admin`),
      role: Role.Admin,
    },
  })
}

main()

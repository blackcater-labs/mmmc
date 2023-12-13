// This file is used to seed the database with data in development

import { PrismaClient } from '@prisma/client'
import { config } from 'dotenv'
import { md5Hash } from '@/utils'
import { UserRole } from '@/modules/user/entity/user.entity'

config()

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      username: 'admin',
      password: md5Hash(`${process.env.SALT_PWD}admin`),
      role: UserRole.Admin,
    },
  })
}

main()

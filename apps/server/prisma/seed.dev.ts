// This file is used to seed the database with data in development

import { resolve } from 'node:path'
import { PrismaClient, Space, User } from '@prisma/client'
import { config } from 'dotenv'
import { md5Hash } from '@/utils'
import { UserRole } from '@/modules/user/entity/user.entity'
import { LibraryType } from '@/modules/library/entities/library.entity'

config()

const prisma = new PrismaClient()

async function createAdminUser() {
  return prisma.user.create({
    data: {
      username: 'admin',
      password: md5Hash(`${process.env.SALT_PWD}admin`),
      role: UserRole.Admin,
    },
  })
}

async function createNormalUser() {
  return prisma.user.create({
    data: {
      username: 'test',
      password: md5Hash(`${process.env.SALT_PWD}test`),
      role: UserRole.User,
    },
  })
}

async function createComicSpace(user: User) {
  return prisma.space.create({
    data: {
      name: 'Comics',
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  })
}

async function createBookSpace(user: User) {
  return prisma.space.create({
    data: {
      name: 'Books',
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  })
}

async function createPdfSpace(user: User) {
  return prisma.space.create({
    data: {
      name: 'Pdfs',
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  })
}

async function createComicLibrary(space: Space, user: User, dir: string) {
  await prisma.library.create({
    data: {
      name: 'DC Comics',
      type: LibraryType.Comic,
      dir: resolve(__dirname, dir),
      space: {
        connect: {
          id: space.id,
        },
      },
      user: {
        connect: {
          id: user.id,
        },
      },
      libraryUsers: {
        create: {
          spaceId: space.id,
          userId: user.id,
        },
      },
    },
  })
}

async function createBookLibrary(space: Space, user: User, dir: string) {
  await prisma.library.create({
    data: {
      name: 'Qidian Novels',
      type: LibraryType.Novel,
      dir: resolve(__dirname, dir),
      space: {
        connect: {
          id: space.id,
        },
      },
      user: {
        connect: {
          id: user.id,
        },
      },
      libraryUsers: {
        create: {
          spaceId: space.id,
          userId: user.id,
        },
      },
    },
  })
}

async function createPdfLibrary(space: Space, user: User, dir: string) {
  await prisma.library.create({
    data: {
      name: 'Douban PDFs',
      type: LibraryType.Pdf,
      dir: resolve(__dirname, dir),
      space: {
        connect: {
          id: space.id,
        },
      },
      user: {
        connect: {
          id: user.id,
        },
      },
      libraryUsers: {
        create: {
          spaceId: space.id,
          userId: user.id,
        },
      },
    },
  })
}

async function main() {
  await createAdminUser()
  const user = await createNormalUser()

  const comicSpace = await createComicSpace(user)
  await createComicLibrary(comicSpace, user, './comics')

  const bookSpace = await createBookSpace(user)
  await createBookLibrary(bookSpace, user, './books')

  const pdfSpace = await createPdfSpace(user)
  await createPdfLibrary(pdfSpace, user, './pdfs')
}

main()

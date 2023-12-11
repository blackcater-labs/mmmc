import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'

import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async findOneById(id: number): Promise<User | undefined> {
    return this.prismaService.user.findUnique({ where: { id } })
  }

  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.prismaService.user.findUnique({ where: { username } })
  }
}

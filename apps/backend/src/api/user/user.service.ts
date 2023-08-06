import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './user.dto'
import { PrismaService } from '@/service/prisma.service'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // Check if user exists by username
  async existsByUsername(username: string) {
    return !!await this.prisma.user.count({ where: { username } })
  }

  // Find user by username
  async findOneByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
    })
  }

  // Add user
  async create(data: CreateUserDto) {
    return this.prisma.user.create({ data })
  }
}

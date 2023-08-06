import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/service/prisma.service'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // Find user by username
  async findOneByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
    })
  }
}

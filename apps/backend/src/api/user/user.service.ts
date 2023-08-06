import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/service/prisma.service'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
}

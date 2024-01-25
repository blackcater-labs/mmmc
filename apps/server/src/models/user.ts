import type { Optional, PartialExcept } from '@/types'
import { UserRole } from '@/types'
import { InternalServerMmmcError } from '@/utils/error'

export interface UserModel {
  id: number
  name: string
  email: string
  password: string
  role: UserRole
  historyPlaylistId: Optional<number>
  favoritePlaylistId: Optional<number>
  createdAt: Date
  updatedAt: Optional<Date>
}

export type CreateUserInput = PartialExcept<
  UserModel,
  'name' | 'email' | 'password'
>

export function convertToUserRole(role: string): UserRole {
  switch (role) {
    case 'Admin':
      return UserRole.Admin
    case 'User':
      return UserRole.User
    default:
      throw new InternalServerMmmcError(`Unknown user role: ${role}`)
  }
}

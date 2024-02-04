import { UserRole } from '@mmmc/lens/server'

import type { Optional, PartialExcept } from '~/types'

import { InternalServerMmmcError } from '~/utils/error'

export interface UserModel {
  avatar: Optional<string>
  createdAt: Date
  email: string
  favoritePlaylistId: Optional<number>
  historyPlaylistId: Optional<number>
  id: number
  name: string
  password: string
  role: UserRole
  updatedAt: Date
}

export type CreateUserInput = PartialExcept<
  UserModel,
  'email' | 'name' | 'password'
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

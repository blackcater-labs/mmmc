import type { UserRole } from '@/types'
import type { Optional, PartialExcept } from '@/types/utils'

export interface UserModel {
  id: number
  name: string
  email: string
  password: string
  role: UserRole
  historyPlaylistId: number
  favoritePlaylistId: number
  createdAt: Date
  updatedAt: Optional<Date>
}

export type CreateUserInput = PartialExcept<UserModel, 'name' | 'email' | 'password'>

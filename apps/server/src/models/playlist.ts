import { type Optional, type PartialExcept, PlaylistType } from '@/types'
import { InternalServerMmmcError } from '@/utils/error'

export interface PlaylistModel {
  id: number
  name: string
  userId: number
  libraryId: Optional<number>
  type: PlaylistType
  createdAt: Date
  updatedAt: Optional<Date>
}

export type CreatePlaylistInput = PartialExcept<
  PlaylistModel,
  'name' | 'userId' | 'type'
>

export function convertToPlaylistType(type: string): PlaylistType {
  switch (type) {
    case 'History':
      return PlaylistType.History
    case 'Favorite':
      return PlaylistType.Favorite
    case 'Normal':
      return PlaylistType.Normal
    default:
      throw new InternalServerMmmcError(`Unknown playlist type: ${type}`)
  }
}

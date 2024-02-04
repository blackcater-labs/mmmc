import type { Optional, PartialExcept } from '~/types'

import { PlaylistType } from '~/types/gql'
import { InternalServerMmmcError } from '~/utils/error'

export interface PlaylistModel {
  createdAt: Date
  id: number
  libraryId: Optional<number>
  name: string
  type: PlaylistType
  updatedAt: Optional<Date>
  userId: number
}

export type CreatePlaylistInput = PartialExcept<
  PlaylistModel,
  'name' | 'type' | 'userId'
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

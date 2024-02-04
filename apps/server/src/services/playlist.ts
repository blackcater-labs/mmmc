import type { CreatePlaylistInput, PlaylistModel } from '~/models/playlist'
import type { DB } from '~/utils/db'

import { convertToPlaylistType } from '~/models/playlist'
import { playlists } from '~/utils/schema'

export async function createPlaylist(db: DB, input: CreatePlaylistInput): Promise<PlaylistModel> {
  const rows = await db.insert(playlists).values(input).returning()
  const row = rows[0]
  return {
    ...row,
    type: convertToPlaylistType(row.type),
  }
}

export const playlistService = {}

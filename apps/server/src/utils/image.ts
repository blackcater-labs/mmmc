import { createAvatar } from '@dicebear/core'
import { identicon } from '@dicebear/collection'

export async function createDefaultAvatar(name?: string) {
  const avatar = createAvatar(identicon, { seed: name || 'Mmmc' })
  return avatar.png().toArrayBuffer()
}

import { readableColorIsBlack } from 'color2k'

import { root } from './common/root'
import { gray } from './common/gray'

export function readableColor(color: string): string {
  if (readableColorIsBlack(color))
    return gray[900]
  return root.white
}

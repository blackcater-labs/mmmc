import { readableColorIsBlack } from 'color2k'
import Color from 'color'

import { gray } from './common/gray'

export function readableColor(color: string): string {
  if (readableColorIsBlack(color))
    return gray[900]
  return gray[50]
}

export function alpha(color: string, alpha: number): string {
  return Color(color).alpha(alpha).hsl().string()
}

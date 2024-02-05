import type plugin from 'tailwindcss/plugin'

import { nextui } from '@nextui-org/theme'
import deepmerge from 'deepmerge'

import type { MmmcPluginConfig } from './types'

import { defaultConfig } from './config'

export function mmmc(config: MmmcPluginConfig = {}): ReturnType<typeof plugin> {
  return nextui(deepmerge(defaultConfig, config))
}

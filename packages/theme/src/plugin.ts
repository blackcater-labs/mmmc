import { nextui } from '@nextui-org/theme'
import deepmerge from 'deepmerge'

import type { MmmcPluginConfig } from './types'
import { defaultConfig } from './config'

export function mmmc(config: MmmcPluginConfig = {}) {
  return nextui(deepmerge(defaultConfig, config))
}

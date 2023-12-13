import { getDefaultStore } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import type { User } from './types'
import { getLocalData } from './lib/localStorage'

export const userAtom = atomWithStorage<User | null>('mmmc-user', getLocalData('mmmc-user'))
export const tokenAtom = atomWithStorage<string | null>('mmmc-token', getLocalData('mmmc-token'))

export const store = getDefaultStore()

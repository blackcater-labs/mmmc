import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export { tv } from '@mmmc/theme'

export function tm(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

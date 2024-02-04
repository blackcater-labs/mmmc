import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export { tv } from '@nextui-org/theme'

export function tm(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

export { tv }

export function tm(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

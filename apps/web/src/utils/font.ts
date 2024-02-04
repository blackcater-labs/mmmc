import { Exo_2, Inter, JetBrains_Mono } from 'next/font/google'

export const exoFont = Exo_2({ subsets: ['latin'], weight: ['400', '700'], style: ['italic'] })
export const brandFont = exoFont

export const interFont = Inter({ subsets: ['latin'], weight: ['400', '700'], style: ['normal'] })
export const defaultFont = interFont

export const jetbrainsMonoFont = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'], style: ['normal'] })
export const codeFont = jetbrainsMonoFont

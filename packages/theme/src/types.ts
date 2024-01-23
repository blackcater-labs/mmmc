import type { ColorScale, ThemeColors } from './colors'

export type { ColorScale, ThemeColors }

export type DefaultThemeType = 'light' | 'dark'

export interface ConfigTheme {
  extend: DefaultThemeType
  colors?: Partial<ThemeColors>
}

export type ConfigThemes = Record<string, ConfigTheme>

export interface MmmcPluginConfig {
  /**
   * CSS variable prefix
   *
   * @default "mmmc"
   */
  prefix?: string

  /**
   * The theme definitions
   */
  themes?: ConfigThemes
}

export interface ThemeColors {
  /**
   * Used for background
   */
  background: Omit<LevelColorScale, 'foreground'>

  /**
   * Used for foreground, like text
   */
  foreground: Omit<LevelColorScale, 'foreground'>

  // Extra colors

  /**
   * Default gray color
   */
  border: InteractiveColorScale

  // Three main colors

  /**
   * Brand color
   */
  primary: LevelColorScale

  /**
   * Secondary color
   */
  secondary: LevelColorScale

  /**
   * Normal gray color
   */
  tertiary: LevelColorScale

  // Status colors

  /**
   * Plain gray color
   */
  default: LevelColorScale

  /**
   * Normal green color
   */
  success: LevelColorScale

  /**
   * Normal red color
   */
  danger: LevelColorScale

  /**
   * Normal orange or yellow color
   */
  warning: LevelColorScale

  /**
   * Normal blue color
   */
  info: LevelColorScale
}

export interface ColorScale extends InteractiveColorScale, LevelColorScale {}

export interface InteractiveColorScale {
  DEFAULT: string
  hover?: string
  selected?: string
  active?: string
  foreground?: string
}

export interface LevelColorScale {
  DEFAULT: string
  muted?: string
  mellow?: string
  subtle?: string
  surface?: string
  foreground?: string
}

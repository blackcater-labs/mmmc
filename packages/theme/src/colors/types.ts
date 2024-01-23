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
  primary: ColorScale

  /**
   * Secondary color
   */
  secondary: ColorScale

  /**
   * Normal gray color
   */
  tertiary: ColorScale

  // Status colors

  /**
   * Plain gray color
   */
  default: ColorScale

  /**
   * Normal green color
   */
  success: ColorScale

  /**
   * Normal red color
   */
  danger: ColorScale

  /**
   * Normal orange or yellow color
   */
  warning: ColorScale

  /**
   * Normal blue color
   */
  info: ColorScale
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

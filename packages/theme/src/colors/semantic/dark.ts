import { blue } from '../common/blue'
import { gray } from '../common/gray'
import { neutral } from '../common/neutral'
import { grape } from '../common/grape'
import { orange } from '../common/orange'
import { red } from '../common/red'
import { green } from '../common/green'
import { alpha, readableColor } from '../utils'
import type { ThemeColors } from '../types'

export const dark: ThemeColors = {
  background: {
    DEFAULT: neutral[950],
    muted: neutral[700],
    mellow: neutral[750],
    subtle: neutral[850],
    surface: neutral[900],
  },
  foreground: {
    DEFAULT: gray[100],
    muted: gray[400],
    subtle: gray[500],
  },

  border: {
    DEFAULT: neutral[900],
    hover: neutral[800],
    selected: neutral[800],
    active: neutral[700],
  },

  primary: {
    DEFAULT: blue[600],
    muted: blue[500],
    mellow: alpha(blue[600], 0.2),
    subtle: alpha(blue[600], 0.1),
    surface: alpha(blue[600], 0.05),
    foreground: readableColor(blue[600]),
  },
  secondary: {
    DEFAULT: grape[600],
    muted: grape[500],
    mellow: alpha(grape[600], 0.2),
    subtle: alpha(grape[600], 0.1),
    surface: alpha(grape[600], 0.05),
    foreground: readableColor(grape[600]),
  },
  tertiary: {
    DEFAULT: gray[900],
    muted: gray[700],
    mellow: alpha(gray[900], 0.2),
    subtle: alpha(gray[900], 0.1),
    surface: alpha(gray[900], 0.05),
    foreground: readableColor(gray[900]),
  },

  default: {
    DEFAULT: neutral[800],
    foreground: readableColor(neutral[800]),
  },
  success: {
    DEFAULT: green[600],
    muted: green[500],
    mellow: alpha(green[600], 0.2),
    subtle: alpha(green[600], 0.1),
    surface: alpha(green[600], 0.05),
    foreground: readableColor(green[600]),
  },
  danger: {
    DEFAULT: red[600],
    muted: red[500],
    mellow: alpha(red[600], 0.2),
    subtle: alpha(red[600], 0.1),
    surface: alpha(red[600], 0.05),
    foreground: readableColor(red[600]),
  },
  warning: {
    DEFAULT: orange[600],
    muted: orange[500],
    mellow: alpha(orange[600], 0.2),
    subtle: alpha(orange[600], 0.1),
    surface: alpha(orange[600], 0.05),
    foreground: readableColor(orange[600]),
  },
  info: {
    DEFAULT: blue[600],
    muted: blue[500],
    mellow: alpha(blue[600], 0.2),
    subtle: alpha(blue[600], 0.1),
    surface: alpha(blue[600], 0.05),
    foreground: readableColor(blue[600]),
  },
}

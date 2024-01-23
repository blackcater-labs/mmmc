import { root } from '../common/root'
import { blue } from '../common/blue'
import { grape } from '../common/grape'
import { gray } from '../common/gray'
import { green } from '../common/green'
import { orange } from '../common/orange'
import { red } from '../common/red'
import { readableColor } from '../utils'
import type { ThemeColors } from '../types'

export const light: ThemeColors = {
  background: {
    DEFAULT: root.white,
    muted: gray[250],
    mellow: gray[200],
    subtle: gray[100],
    surface: gray[50],
  },
  foreground: {
    DEFAULT: gray[900],
    muted: gray[600],
    subtle: gray[500],
  },

  border: {
    DEFAULT: gray[300],
    hover: gray[400],
    selected: gray[400],
    active: gray[500],
  },

  primary: {
    DEFAULT: blue[600],
    hover: blue[800],
    selected: blue[800],
    active: blue[900],
    muted: blue[250],
    mellow: blue[200],
    subtle: blue[100],
    surface: blue[50],
    foreground: readableColor(blue[600]),
  },
  secondary: {
    DEFAULT: grape[600],
    hover: grape[800],
    selected: grape[800],
    active: grape[900],
    muted: grape[250],
    mellow: grape[200],
    subtle: grape[100],
    surface: grape[50],
    foreground: readableColor(grape[600]),
  },
  tertiary: {
    DEFAULT: gray[900],
    hover: gray[800],
    selected: gray[800],
    active: gray[900],
    muted: gray[250],
    mellow: gray[200],
    subtle: gray[100],
    surface: gray[50],
    foreground: readableColor(gray[900]),
  },

  default: {
    DEFAULT: gray[150],
    hover: gray[200],
    selected: gray[200],
    active: gray[300],
    subtle: gray[100],
    surface: gray[50],
    foreground: readableColor(gray[150]),
  },
  success: {
    DEFAULT: green[600],
    hover: green[800],
    selected: green[800],
    active: green[900],
    muted: green[250],
    mellow: green[200],
    subtle: green[100],
    surface: green[50],
    foreground: readableColor(green[600]),
  },
  danger: {
    DEFAULT: red[600],
    hover: red[800],
    selected: red[800],
    active: red[900],
    muted: red[250],
    mellow: red[200],
    subtle: red[100],
    surface: red[50],
    foreground: readableColor(red[600]),
  },
  warning: {
    DEFAULT: orange[600],
    hover: orange[800],
    selected: orange[800],
    active: orange[900],
    muted: orange[250],
    mellow: orange[200],
    subtle: orange[100],
    surface: orange[50],
    foreground: readableColor(orange[600]),
  },
  info: {
    DEFAULT: blue[600],
    hover: blue[800],
    selected: blue[800],
    active: blue[900],
    muted: blue[300],
    mellow: blue[200],
    subtle: blue[100],
    surface: blue[50],
    foreground: readableColor(blue[600]),
  },
}

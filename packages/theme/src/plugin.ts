import plugin from 'tailwindcss/plugin'

import get from 'lodash.get'
import deepmerge from 'deepmerge'
import omit from 'lodash.omit'
import forEach from 'lodash.foreach'
import Color from 'color'

import type { ConfigTheme, ConfigThemes, MmmcPluginConfig } from './types'
import { commonColors, semanticColors } from './colors'
import { flattenThemeObject } from './utils'
import { animations } from './animations'

const DEFAULT_PREFIX = 'mmmc'
const DEFAULT_THEME = 'light'

const parsedColorsCache: Record<string, number[]> = {}

function isBaseTheme(theme: string) {
  return theme === 'light' || theme === 'dark'
}

function resolveConfig(themes: ConfigThemes = {}, prefix: string) {
  const resolved: {
    variants: { name: string, definition: string[] }[]
    utilities: Record<string, Record<string, any>>
    colors: Record<
      string,
      ({ opacityValue, opacityVariable }: { opacityValue: string, opacityVariable: string }) => string
    >
  } = {
    variants: [],
    utilities: {},
    colors: {},
  }

  for (const [themeName, { extend, colors }] of Object.entries(themes)) {
    let cssSelector = `.${themeName},[data-theme="${themeName}"]`
    const scheme = themeName === 'light' || themeName === 'dark' ? themeName : extend

    if (themeName === DEFAULT_THEME)
      cssSelector = `:root,${cssSelector}`

    resolved.utilities[cssSelector] = scheme
      ? {
          'color-scheme': scheme,
        }
      : {}

    const flatColors = flattenThemeObject(colors) as Record<string, string>

    resolved.variants.push({
      name: themeName,
      definition: [`&.${themeName}`, `&[data-theme='${themeName}']`],
    })

    /**
     * Colors
     */
    for (const [colorName, colorValue] of Object.entries(flatColors)) {
      if (!colorValue)
        return

      try {
        const parsedColor
        = parsedColorsCache[colorValue] || Color(colorValue).hsl().round().array()

        parsedColorsCache[colorValue] = parsedColor

        const [h, s, l, defaultAlphaValue] = parsedColor
        const nextuiColorVariable = `--${prefix}-${colorName}`
        const nextuiOpacityVariable = `--${prefix}-${colorName}-opacity`

        // set the css variable in "@layer utilities"
        resolved.utilities[cssSelector]![nextuiColorVariable] = `${h} ${s}% ${l}%`
        // if an alpha value was provided in the color definition, store it in a css variable
        if (typeof defaultAlphaValue === 'number')
          resolved.utilities[cssSelector]![nextuiOpacityVariable] = defaultAlphaValue.toFixed(2)

        // set the dynamic color in tailwind config theme.colors
        resolved.colors[colorName] = ({ opacityVariable, opacityValue }) => {
        // if the opacity is set  with a slash (e.g. bg-primary/90), use the provided value
          if (!Number.isNaN(+opacityValue))
            return `hsl(var(${nextuiColorVariable}) / ${opacityValue})`

          // if no opacityValue was provided (=it is not parsable to a number)
          // the nextuiOpacityVariable (opacity defined in the color definition rgb(0, 0, 0, 0.5)) should have the priority
          // over the tw class based opacity(e.g. "bg-opacity-90")
          // This is how tailwind behaves as for v3.2.4
          if (opacityVariable)
            return `hsl(var(${nextuiColorVariable}) / var(${nextuiOpacityVariable}, var(${opacityVariable})))`

          return `hsl(var(${nextuiColorVariable}) / var(${nextuiOpacityVariable}, 1))`
        }
      }
      catch (error: any) {
      // eslint-disable-next-line no-console
        console.log('error', error?.message)
      }
    }
  }

  return resolved
}

function pluginCore(
  themes: ConfigThemes = {},
  prefix: string,
) {
  const resolved = resolveConfig(themes, prefix)

  return plugin(
    ({ addVariant, addUtilities, addBase }) => {
      addBase({
        ':root, [data-theme]': {
          color: `hsl(var(--${prefix}-foreground))`,
          backgroundColor: `hsl(var(--${prefix}-background))`,
        },
      })

      addUtilities({ ...resolved?.utilities })

      resolved?.variants.forEach((variant) => {
        addVariant(variant.name, variant.definition)
      })
    },
    {
      theme: {
        extend: {
          colors: {
            ...commonColors,
            ...resolved?.colors,
          },
          ...animations,
        },
      },
    },
  )
}

export function mmmc(config: MmmcPluginConfig = {}) {
  const {
    prefix = DEFAULT_PREFIX,
    themes: themeObject = {},
  } = config
  const userLightColors = get(themeObject, 'light.colors', {})
  const userDarkColors = get(themeObject, 'dark.colors', {})

  const otherThemes = omit(themeObject, ['light', 'dark']) || {}

  forEach(otherThemes, ({ extend, colors }, themeName) => {
    const baseTheme = isBaseTheme(extend) ? extend : DEFAULT_THEME

    otherThemes[themeName].extend = baseTheme

    if (colors && typeof colors === 'object') {
      otherThemes[themeName].colors = deepmerge(
        semanticColors[baseTheme],
        colors,
      )
    }
  })

  const light: ConfigTheme = {
    extend: 'light',
    colors: deepmerge(semanticColors.light, userLightColors),
  }

  const dark = {
    extend: 'dark',
    colors: deepmerge(semanticColors.dark, userDarkColors),
  }

  const themes: ConfigThemes = {
    light,
    // @ts-expect-error-next-line TODO: fix me
    dark,
    ...otherThemes,
  }

  return pluginCore(themes, prefix)
}

import { flatten } from 'flat'

export function swapColorValues<T extends Record<string, string>>(colors: T) {
  const swappedColors = {}
  const keys = Object.keys(colors)
  const length = keys.length

  for (let i = 0; i < length / 2; i++) {
    const key1 = keys[i]
    const key2 = keys[length - 1 - i]

    // @ts-expect-error-next-line
    swappedColors[key1] = colors[key2]
    // @ts-expect-error-next-line
    swappedColors[key2] = colors[key1]
  }
  if (length % 2 !== 0) {
    const middleKey = keys[Math.floor(length / 2)]

    // @ts-expect-error-next-line
    swappedColors[middleKey] = colors[middleKey]
  }

  return swappedColors
}

export function removeDefaultKeys<T extends Record<string, string>>(obj: T) {
  const newObj = {}

  for (const key in obj) {
    if (key.endsWith('-DEFAULT')) {
      // @ts-expect-error-next-line
      newObj[key.replace('-DEFAULT', '')] = obj[key]
      continue
    }
    // @ts-expect-error-next-line
    newObj[key] = obj[key]
  }

  return newObj
}

/**
 *
 * Flatten theme object and remove default keys
 *
 * @param obj theme object
 * @returns object with flattened keys
 */
export function flattenThemeObject<TTarget>(obj: TTarget) {
  return removeDefaultKeys(
    flatten(obj, {
      safe: true,
      delimiter: '-',
    }) as Record<string, string>,
  )
}

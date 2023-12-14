export function getLocalData<Value>(key: string): Value | null {
  const raw = window.localStorage.getItem(key)
  if (raw)
    return JSON.parse(raw)

  return null
}

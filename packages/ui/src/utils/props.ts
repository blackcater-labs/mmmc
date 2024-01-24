export type ClassNames<T> = {
  [key in keyof T]?: string
}

export type Styles<T> = {
  [key in keyof T]?: React.CSSProperties
}

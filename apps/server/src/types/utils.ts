export type Promisable<T> = T | Promise<T>

export type Nullable<T> = T | null

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}

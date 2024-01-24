export type Optional<T> = T | null

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
}

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type PartialExcept<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>

export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>
export type RequiredExcept<T, K extends keyof T> = Pick<T, K> & Required<Omit<T, K>>

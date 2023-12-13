export enum UserRole {
  Admin = 1,
  User = 2,
}

export interface User {
  id: number
  name: string
  role: UserRole
}

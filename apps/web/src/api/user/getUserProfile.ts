import request from '@/lib/request'
import type { User } from '@/types'

export function getUserProfile(): Promise<User> {
  return request.get('/user/profile')
}

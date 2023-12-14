import request from '@/lib/request'
import type { User } from '@/types'

interface registerReq {
  username: string
  password: string
  passwordConfirm: string
}

interface registerResp {
  access_token: string
  user: User
}

export function register(data: registerReq): Promise<registerResp> {
  return request.post('/auth/register', data)
}

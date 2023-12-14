import request from '@/lib/request'
import type { User } from '@/types'

interface loginReq {
  username: string
  password: string
}

interface loginResp {
  access_token: string
  user: User
}

export function login(data: loginReq): Promise<loginResp> {
  return request.post('/auth/login', data)
}

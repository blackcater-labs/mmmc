import request from '@/lib/request'

export function login(data: any) {
  return request.post('/auth/login', data)
}

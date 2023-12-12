import axios from 'axios'
import { toast } from 'sonner'

import { clearAccessToken, getAccessToken } from './localStorage'
import { router } from '@/router'

const instance = axios.create({
  baseURL: '/api',
  timeout: 60000, // 60s
})

instance.interceptors.request.use((config) => {
  if (!config.url?.startsWith('/auth')) {
    const token = getAccessToken()
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

instance.interceptors.response.use(resp => resp.data, (err) => {
  if (err?.response?.data) {
    const data = err.response.data
    if (data.statusCode && data.statusCode >= 400)
      toast.error(data.message[0], { position: 'top-right' })
  }

  if (err?.response?.status === 401) {
    // Unauthorized
    clearAccessToken()
    router.navigate({ to: '/login', search: { redirectUrl: window.location.href } })
  }

  throw err
})

export default instance

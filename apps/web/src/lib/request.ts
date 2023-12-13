import axios from 'axios'
import { toast } from 'sonner'

import { router } from '@/router'
import { store, tokenAtom, userAtom } from '@/store'

const instance = axios.create({
  baseURL: '/api',
  timeout: 60000, // 60s
})

instance.interceptors.request.use((config) => {
  if (!config.url?.startsWith('/auth')) {
    const token = store.get(tokenAtom)
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

instance.interceptors.response.use((resp) => {
  if (resp.data?.success) { return resp.data?.data }
  else {
    if (resp.data?.message)
      toast.error(resp.data?.message, { position: 'top-right' })
    throw resp.data
  }
}, (err) => {
  if (err?.response?.data) {
    const data = err.response.data
    if (data.statusCode && data.statusCode >= 400)
      toast.error(data.message[0], { position: 'top-right' })
  }

  if (err?.response?.status === 401) {
    // Unauthorized
    store.set(tokenAtom, null)
    store.set(userAtom, null)
    router.navigate({ to: '/login', search: { redirectUrl: window.location.href } })
  }

  throw err
})

export default instance

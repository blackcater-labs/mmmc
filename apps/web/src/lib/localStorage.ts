export function getAccessToken() {
  return window.localStorage.getItem('access_token')
}

export function setAccessToken(token: string) {
  return window.localStorage.setItem('access_token', token)
}

export function clearAccessToken() {
  return window.localStorage.removeItem('access_token')
}

export function getLoginState() {
  const raw = window.localStorage.getItem('login_state')

  return raw ? JSON.parse(raw) : undefined
}

export function setLoginState(data: any) {
  return window.localStorage.setItem('login_state', JSON.stringify(data))
}

export function clearLoginState() {
  return window.localStorage.removeItem('login_state')
}

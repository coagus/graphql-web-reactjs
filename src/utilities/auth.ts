const TOKEN: string = 'TOKEN'

export function setToken(token: string): void {
  localStorage.setItem(TOKEN, token)
}

export function getToken(): string | null {
  return localStorage.getItem(TOKEN)
}

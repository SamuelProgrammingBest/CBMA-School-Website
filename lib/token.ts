const TOKEN_KEY = "cbma_token"
type JwtPayload = { exp?: number }

export const setToken = (token: string) =>
{
  if (typeof window === "undefined") return null
  localStorage.setItem(TOKEN_KEY, token)
}

export const getToken = () => {
  if (typeof window === "undefined") return 
  return localStorage.getItem(TOKEN_KEY)
}

export const deleteToken = () => {
  if (typeof window === "undefined") return
  localStorage.removeItem(TOKEN_KEY)
}



export const decodeToken = (token: string): JwtPayload | null => {
  try {
    const base64Url = token.split(".")[1]
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
    return JSON.parse(atob(base64))
  } catch {
    return null
  }
}

export const isTokenExpired = (token: string): boolean => {
  const decoded = decodeToken(token)
  if (!decoded?.exp) return true
  return decoded.exp * 1000 < Date.now() // exp is in seconds, Date.now() is in ms
}
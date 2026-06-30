import { deleteToken } from "./token"

export type APICall = {
  method: "GET" | "POST" | "PATCH" | "DELETE"
  body?: Record<string, unknown> | FormData
  token?: string
  pathName: string
}

export const apiCall = async ({ method, body, token, pathName }: APICall) => {
  try {
    const isFormData = body instanceof FormData
    const headers: Record<string, string> = {}

    if (token) headers["Authorization"] = `Bearer ${token}`
    if (!isFormData) headers["Content-Type"] = "application/json"

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_CALL_URL}/api/cbma${pathName}`, {
      method,
      headers,
      body:
        method === "GET" || method === "DELETE"
          ? undefined
          : isFormData
            ? body as FormData
            : JSON.stringify(body),
    })

    if(res.status === 401) {
      deleteToken()
  if (typeof window !== "undefined") {
    window.location.href = "/admin"
  }
    }

    const data = await res.json()

    if (!res.ok) throw new Error(data?.message)

    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

// export const get
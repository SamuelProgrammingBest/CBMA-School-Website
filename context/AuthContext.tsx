"use client"
import { getToken, isTokenExpired } from "@/lib/token"
import { useRouter } from "next/navigation"
import React, { createContext, useContext, useEffect, useState } from "react"

interface AuthContextType  {
    token:string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

//   const [authorized, setAuthorized] = useState(false)
  const [token, setToken] = useState<string>("")

  useEffect(() => {
    let gotToken = getToken()

    if(!gotToken) gotToken = ""

    if (!gotToken && isTokenExpired(gotToken)) {
      router.replace("/admin")
    } else {
        setToken(gotToken)
    }
  }, [router])


  if (!token) return null

  return <AuthContext.Provider value={{token}}>{children}</AuthContext.Provider>

}

export const useAuth =()=>{
    const context = useContext(AuthContext)
    if(!context) throw new Error("AuthProvider not wrapped")

    return context
}

export default AuthProvider

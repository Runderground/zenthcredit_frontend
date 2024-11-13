import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'

interface AuthContextType {
  user: any;
  token: string | null
  login: ( userData: any, token: string) => void;
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [user, setUser] = useState<any>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('@zenithcredit:user')
    const storedToken = localStorage.getItem('@zenithcredit:token')

    if(storedUser && storedToken) {
      setUser(JSON.parse(storedUser))
      setToken(storedToken)
    }
  }, [])

  const login = (userData: any, token: string) => {
    setUser(userData)
    setToken(token)
    localStorage.setItem('@zenithcredit:user', JSON.stringify(userData))
    localStorage.setItem('@zenithcredit:token', token)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('@zenithcredit:token')
    localStorage.removeItem('@zenithcredit:user')
  }

  return (
    <AuthContext.Provider value={{user, token, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}



export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if(!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
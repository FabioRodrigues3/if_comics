import React, { createContext, useState, useEffect } from 'react'
import { auth } from '../utils/firebase.js'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getLocalUser, setLocalUser } from './authUtil.js'
interface AuthContextProvider {
  email?: string
  password?: string
  token?: string
  LoginWithGoogle: () => void
  LoginWithAPI: (email: string, password: string) => void
  user: {}
  googleUser: {}
}

export const AuthContext = createContext({} as AuthContextProvider)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [appUser, setAppUser] = useState({})
  const [googleUser, setGoogleUser] = useState({})
  const googleAuthProvider = new GoogleAuthProvider()

  useEffect(() => {}, [])

  const LoginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider)
      setGoogleUser(result)
      setLocalUser(result.user.uid)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  const LoginWithAPI = async (email: string, password: string) => {
    const payload = { password, email }

    setAppUser(payload)
    setLocalUser(payload.token)
  }

  return (
    <AuthContext.Provider value={{ LoginWithGoogle, googleUser, LoginWithAPI }}>
      {children}
    </AuthContext.Provider>
  )
}

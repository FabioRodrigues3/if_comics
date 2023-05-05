import React, { createContext, useState, useEffect } from 'react'
import { auth } from '../utils/firebase.js'
import {
  Auth,
  GoogleAuthProvider,
  User,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
interface AuthContextProvider {
  LoginWithGoogle: () => void
  SignOut: (auth: Auth) => void
  googleUser: User
  setGoogleUser: () => void
}

export const AuthContext = createContext({} as AuthContextProvider)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [googleUser, setGoogleUser] = useState<User>({} as User)

  const LoginWithGoogle = () => {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider).then((result) => {
      setGoogleUser(result.user)
    })
  }

  function SignOut(auth: Auth) {
    auth.signOut().then(() => setGoogleUser(null))
  }

  return (
    <AuthContext.Provider
      value={{ LoginWithGoogle, googleUser, SignOut, setGoogleUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

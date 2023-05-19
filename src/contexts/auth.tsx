import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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
    auth.signOut().then(() => setGoogleUser({}))
    const userKey = Object.keys(window.localStorage).filter((it) =>
      it.startsWith('firebase:authUser'),
    )[0]
    localStorage.removeItem('u')

    setGoogleUser(null)
    localStorage.removeItem(userKey)
  }

  return (
    <AuthContext.Provider
      value={{ LoginWithGoogle, googleUser, SignOut, setGoogleUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

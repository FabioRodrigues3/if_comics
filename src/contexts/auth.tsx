import { createContext, useState, useEffect } from "react";
import { auth } from '../utils/firebase.js'
import { GoogleAuthProvider, signInWithPopup, getAuth, UserCredential } from 'firebase/auth'
import { AuthCredential } from 'firebase/auth/'
import { useNavigate } from "react-router-dom";
import { LoginRequest, getLocalUser, setLocalUser } from "./authUtil.js";
import { comicApi } from "../services/api.js";
interface AuthContextProvider {
    email?: string;
    password?: string;
    token?: string;
    LoginWithGoogle: () => void;
    LoginWithAPI: (email: string, password: string) => void
    user: {}
    googleUser: {}
}

export const AuthContext = createContext({} as AuthContextProvider)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState({})
    const [googleUser, setGoogleUser] = useState({})
    const googleAuthProvider = new GoogleAuthProvider()

    useEffect(() => {
        const user = getLocalUser()
        if (user) {
            setGoogleUser(user)
            setUser(user)
        }
    }, [])

    const LoginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleAuthProvider)
            setGoogleUser(result.user)
            setLocalUser(result.user)
        } catch (error) {
            console.log(error)
        }
    }

    const LoginWithAPI = async (email: string, password: string) => {
        const response = await LoginRequest(email, password)
        const payload = { password, email }

        setUser(payload)
        setLocalUser(payload.token)

        console.log(payload)
    }

    return (
        <AuthContext.Provider value={{ LoginWithGoogle, user, googleUser, LoginWithAPI }}>
            {children}
        </AuthContext.Provider>
    )
}
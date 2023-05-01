import { comicApi } from "../services/api"

export function setLocalUser(user: string) {
    localStorage.setItem('u', JSON.stringify(user))
} 


export function getLocalUser() {
    const json = localStorage.getItem('u')

    if (!json) return null

    const user = JSON.parse(json)

    return user ?? null
}

export function LoginRequest(email: string, password: string) {
    try {
        const {data} = comicApi.post('login', { email, password })
        return data
    } catch (err) {

    }
}
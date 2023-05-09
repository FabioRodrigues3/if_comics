import { io } from 'socket.io-client'

const URL =
  import.meta.env.NODE_ENV === 'production'
    ? undefined
    : 'http://localhost:3333/'

export const socket = io(URL)

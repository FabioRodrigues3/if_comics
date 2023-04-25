import axios from 'axios'

export const comicApi = axios.create({
  baseURL: 'http://localhost:3333',
})

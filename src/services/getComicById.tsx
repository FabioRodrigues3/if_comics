import { comicApi } from './api'

export interface getComicsProps {
  id?: string
  title?: string
  author?: string
  description?: string
  likes?: number
  image?: string
  tags?: string[]
  imageUrl?: string
  createdAt?: string
  genres?: string
  user_id?: string
}

export interface ResponseProps {
  comicById: getComicsProps
}

interface getComicByIdProps {
  id: string | undefined
}

export async function getComicById({ id }: getComicByIdProps) {
  const { data } = await comicApi.get<ResponseProps>(`/comics/${id}`)
  return data.comicById
}

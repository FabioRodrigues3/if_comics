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
}

export interface ResponseProps {
  comicById: getComicsProps
}

interface getComicByIdProps {
  id: string
}

export async function getComicById({ id }: getComicByIdProps) {
  const { data } = await comicApi.get<ResponseProps>(`/comics/${id}`)
  return data.comicById
}

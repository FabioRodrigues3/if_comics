import { comicApi } from './comicApi'

export interface getComicsProps {
  id?: string
  title?: string
  author?: string
  description?: string
  likes?: number
  image?: string
  tags?: string[]
}

interface getComicByIdProps {
  id: string
}

export async function getComicById({ id }: getComicByIdProps) {
  const { data } = await comicApi.get<getComicsProps>(`comics/${id}`)
  return data
}

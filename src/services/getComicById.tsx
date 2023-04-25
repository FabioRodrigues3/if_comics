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

export interface ResponseProps {
  comicById: getComicsProps
}

interface getComicByIdProps {
  id: string
}

export async function getComicById({ id }: getComicByIdProps) {
  const { data } = await comicApi.get<ResponseProps>(`/comics/${id}`)
  console.log(data)
  return data.comicById
}

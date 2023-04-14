import { comicApi } from './comicApi'

interface getComicsProps {
  id?: string
  title?: string
  author?: string
  description?: string
  likes: number
  image: string
}

export async function GetComics() {
  const { data } = await comicApi.get<getComicsProps[]>('/comics')
  return data
}

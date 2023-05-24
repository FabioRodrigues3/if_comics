import { comicApi } from './api'

interface getComicsProps {
  id?: string
  title?: string
  author?: string
  description?: string
  likes: number
  image: string
  imageUrl: string
}

interface ResponseProps {
  comics: getComicsProps[]
  comicsByLike: getComicsProps[]
}

export async function GetComics() {
  const { data } = await comicApi.get<ResponseProps>('/comics')
  return data.comics
}

export async function GetByLike() {
  const { data } = await comicApi.get<ResponseProps>('comics/byLikes')
  return data.comicsByLike
}

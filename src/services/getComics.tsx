import { comicApi } from './comicApi'

interface getComicsProps {
  id?: string
  title?: string
  author?: string
  description?: string
  likes: number
  image: string
}

interface ResponseProps {
  comics: getComicsProps
}

export async function GetComics() {
  const { data } = await comicApi.get<ResponseProps>('/comics')
  return data.comics
}

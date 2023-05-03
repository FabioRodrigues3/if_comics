import { comicApi } from './api'

export interface CreateComicProps {
  id?: string
  title?: string
  description?: string
  image?: string
  likes?: number
  author?: string | null
  user_id?: string | null
}

export async function CreateComic({
  description,
  id,
  image,
  title,
  author,
  likes,
  user_id,
}: CreateComicProps) {
  await comicApi.post<CreateComicProps>('/comics', {
    title,
    author,
    image,
    likes,
    id,
    description,
    user_id,
  })
}

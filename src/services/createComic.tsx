import { comicApi } from './api'

export interface CreateComicProps {
  id?: string
  title?: string
  description?: string
  likes?: number
  author?: string | null
  user_id?: string | null
  comic_cover?: any
  image: File | undefined
  genres: string
}

export async function CreateComic({
  description,
  id,
  image,
  title,
  author,
  likes,
  user_id,
  comic_cover,
  genres,
}: CreateComicProps) {
  await comicApi.post<CreateComicProps>(
    '/comics',
    {
      title,
      author,
      image,
      likes,
      id,
      description,
      user_id,
      comic_cover,
      genres,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  )
}

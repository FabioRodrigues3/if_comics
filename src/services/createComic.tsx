import { comicApi } from './comicApi'

interface CreateComicProps {
  id?: string
  title?: string
  description?: string
  image?: string
  likes?: number
}

export async function CreateComic({
  description,
  id,
  image,
  title,
  likes,
}: CreateComicProps) {
  await comicApi.post<CreateComicProps>(
    '/comics/create',
    JSON.stringify({
      title,
      image,
      likes,
      id,
      description,
    }),
  )
}

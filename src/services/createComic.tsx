import { comicApi } from './comicApi'

interface CreateComicProps {
  id?: string
  title?: string
  description?: string
  image?: string
  likes?: number
  author?: string
}

export async function CreateComic({
  description,
  id,
  image,
  title,
  author,
  likes,
}: CreateComicProps) {
  await comicApi.post<CreateComicProps>('/comics', {
    title,
    author,
    image,
    likes,
    id,
    description,
  })
}

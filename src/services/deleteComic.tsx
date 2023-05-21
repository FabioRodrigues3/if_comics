import { comicApi } from './api'

interface DeleteComicProps {
  comicId?: string
}

export async function DeleteComic({ comicId }: DeleteComicProps) {
  await comicApi.delete(`/comics/${comicId}`)
}

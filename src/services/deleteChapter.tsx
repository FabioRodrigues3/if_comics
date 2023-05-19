import { comicApi } from './api'

interface DeleteChapterProps {
  id?: string
}

export async function DeleteChapter({ id }: DeleteChapterProps) {
  await comicApi.delete(`/chapters/chapter/${id}`)
}

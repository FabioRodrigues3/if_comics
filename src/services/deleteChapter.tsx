import { comicApi } from './api'

interface DeleteChapterProps {
  id?: string
  comicId?: string
}

export async function DeleteChapter({ comicId, id }: DeleteChapterProps) {
  await comicApi.delete(`/chapters/${comicId}/${id}`)
}

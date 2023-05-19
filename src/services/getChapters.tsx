import { comicApi } from './api'

export interface GetChapterByIdProps {
  id?: string
  comicId?: string
  chapterTitle?: string
  chapterFile?: string
  chapterNumber?: string
}

export interface ResponseProps {
  chapter: GetChapterByIdProps
}

export async function getChapterById({ comicId }: GetChapterByIdProps) {
  const { data } = await comicApi.get<ResponseProps>(`/chapters/${comicId}`)
  return data.chapter
}

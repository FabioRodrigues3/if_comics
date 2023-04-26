import { comicApi } from './comicApi'

export interface GetChapterByIdProps {
  id?: string
  comicId?: string
  chapterTitle?: string
  chapterFile?: string
  chapterNumber?: string
}

export interface ResponseProps {
  chapterById: GetChapterByIdProps
}

export async function getChapterById({ comicId }: GetChapterByIdProps) {
  const { data } = await comicApi.get<ResponseProps>(`/chapters/${comicId}`)
  console.log(data.chapterById)
  return data.chapterById
}

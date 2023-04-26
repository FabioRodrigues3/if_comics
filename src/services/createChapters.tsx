import { comicApi } from './comicApi'

export interface CreateChapterProps {
  id?: string
  comicId?: string
  chapterTitle?: string
  chapterFile?: string
  chapterNumber?: string
}

export async function CreateChapters({
  id,
  chapterTitle,
  chapterFile,
  comicId,
  chapterNumber,
}: CreateChapterProps) {
  await comicApi.post<CreateChapterProps>('/chapters', {
    chapterTitle,
    chapterFile,
    comicId,
    id,
    chapterNumber,
  })
}

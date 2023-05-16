import { comicApi } from './api'

export interface CreateChapterProps {
  id?: string
  comicId?: string
  chapterTitle?: string
  pdfFile?: any
  chapterNumber?: string
}

export async function CreateChapters({
  id,
  chapterTitle,
  pdfFile,
  comicId,
  chapterNumber,
}: CreateChapterProps) {
  await comicApi.post<CreateChapterProps>(
    '/chapters',
    {
      chapterTitle,
      pdfFile,
      comicId,
      id,
      chapterNumber,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  )
}

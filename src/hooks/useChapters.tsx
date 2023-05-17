import { useState, useEffect } from 'react'
import { GetChapterByIdProps, getChapterById } from '../services/getChapters'
import { getChapter } from '../services/getChapter'

export function useChapters({
  comicId,
  id,
}: {
  comicId?: string
  id?: string
}) {
  const [chapters, setChapters] = useState<GetChapterByIdProps[]>([])
  const [chapter, setChapter] = useState({})
  async function getChapters() {
    const response = await getChapterById({ comicId }).then((response) =>
      setChapters(response),
    )

    return response
  }

  async function getChapterUnique() {
    const response = await getChapter({ id }).then((response) =>
      setChapter(response),
    )
    console.log(response)
    return response
  }

  useEffect(() => {
    getChapters()
    getChapterUnique()
  }, [])

  return { chapters, chapter }
}

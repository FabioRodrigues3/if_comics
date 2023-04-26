import { useState, useEffect } from 'react'
import { GetChapterByIdProps, getChapterById } from '../services/getChapters'

export function useChapters({ comicId }: { comicId: string }) {
  const [chapters, setChapters] = useState<GetChapterByIdProps[]>([])

  async function getChapters() {
    const response = await getChapterById({ comicId }).then((response) =>
      setChapters(response),
    )

    console.log(chapters)

    return response
  }

  useEffect(() => {
    getChapters()
  }, [])

  return { chapters }
}

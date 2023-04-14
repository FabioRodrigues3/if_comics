import { getComicById, getComicsProps } from '../../services/getComicById'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface ComicChaptersProps {
  comicId?: string
}

export function ComicChapters({ comicId }: ComicChaptersProps) {
  const { id } = useParams()
  const [serie, setSerie] = useState<getComicsProps>()

  const series = async () => {
    await getComicById({ id }).then((response) => setSerie(response))
  }

  useEffect(() => {
    series()
  }, [])

  return (
    <div>
      {serie?.author}
      {serie?.description}
      {serie?.likes}
      {serie?.title}
    </div>
  )
}

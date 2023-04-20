import { useParams } from 'react-router-dom'
import { getComicById, getComicsProps } from '../services/getComicById'
import { useState, useEffect } from 'react'

export function useIdParam() {
  const [serie, setSerie] = useState<getComicsProps>({})
  const { id } = useParams()

  async function getComic() {
    const response = await getComicById({ id }).then((response) =>
      setSerie(response),
    )

    return response
  }

  useEffect(() => {
    getComic()
  }, [])

  return { serie }
}

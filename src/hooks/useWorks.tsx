import { useContext } from 'react'
import { SeriesContext } from '../contexts/series'

export const useSeries = () => {
  const context = useContext(SeriesContext)

  return context
}

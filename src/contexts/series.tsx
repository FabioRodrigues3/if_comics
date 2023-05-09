import { createContext, useState, useEffect } from 'react'
import { GetComics } from '../services/getComics'

interface SeriesProps {
  title: string
  description: string
  author: string
  likes: number
  createdAt: string
  imageUrl: string
}
interface ISeriesContextProps {
  series: SeriesProps[]
}

export const SeriesContext = createContext({} as ISeriesContextProps)

export const SeriesProvider = ({ children }: { children: React.ReactNode }) => {
  const [seriesList, setSeriesList] = useState<SeriesProps[]>([])

  async function settingSeriesList() {
    await GetComics().then((response) => setSeriesList(response))
  }

  useEffect(() => {
    settingSeriesList()
  }, [])

  return (
    <SeriesContext.Provider value={{ series: seriesList }}>
      {children}
    </SeriesContext.Provider>
  )
}

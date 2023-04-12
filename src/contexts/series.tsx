import { createContext, useState, useEffect } from 'react'

interface SeriesProps {
  title: string
  description: string
  author: string
  likes: number
  createdAt: string
  image: string
}
interface ISeriesContextProps {
  series: SeriesProps[]
}

export const SeriesContext = createContext({} as ISeriesContextProps)

export const SeriesProvider = ({ children }: { children: React.ReactNode }) => {
  const [seriesList, setSeriesList] = useState<SeriesProps[]>([])

  async function settingSeriesList() {
    setSeriesList([
      {
        author: 'sizei',
        createdAt: '12/11/19',
        description: 'um cu',
        likes: 12,
        title: 'O grande disgraça',
        image: '',
      },

      {
        author: 'sizei',
        createdAt: '12/11/19',
        description: 'um cu',
        likes: 13,
        title: 'O grande disgraça',
        image: '',
      },
    ])
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

import { Container, FindWorks, Works } from './styles'
import { Carousel } from '../../components/Carousel'
import { CustomSeparator } from '../../components/Footer/styles'
import { useSeries } from '../../hooks/useWorks'
import { WorkCard } from '../../components/WorkCard'
import { useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'

export function Home() {
  const { series } = useSeries()
  const { setGoogleUser, googleUser } = useAuth()
  const sortByLikes = series.sort((a, b) => b.likes - a.likes)

  const userKey = Object.keys(window.sessionStorage).filter((it) =>
    it.startsWith('firebase:authUser'),
  )[0]

  console.log(userKey)
  const data = JSON.parse(sessionStorage.getItem(userKey))
  console.log(data)
  useEffect(() => {
    setGoogleUser(data)
  }, [])

  return (
    <Container className="slide-in-bottom">
      <h2>Histórias publicadas</h2>
      <CustomSeparator />
      <Works>
        <Carousel works={series} />
      </Works>

      <h2>Histórias mais curtidas</h2>
      <CustomSeparator />

      <Works>
        <Carousel works={sortByLikes} />
      </Works>

      <FindWorks>
        <CustomSeparator />
        <h2>Mais obras</h2>
        <Works>
          {series.map((work) => (
            <WorkCard {...work} hasLikeIndicator={false} />
          ))}
        </Works>
      </FindWorks>
    </Container>
  )
}

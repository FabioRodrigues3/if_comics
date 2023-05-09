import { Container, FindWorks, Works } from './styles'
import { Carousel } from '../../components/Carousel'
import { CustomSeparator } from '../../components/Footer/styles'
import { useSeries } from '../../hooks/useWorks'
import { WorkCard } from '../../components/WorkCard'

export function Home() {
  const { series } = useSeries()

  const sortByLikes = series.sort((a, b) => b.likes - a.likes)

  return (
    <Container>
      <img src={series[0]?.imgUrl} />

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

import { Container, DiscoverWorks, FindWorks, Works } from './styles'
import { Carousel } from '../../components/Carousel'
import { CustomSeparator } from '../../components/Footer/styles'
import { useSeries } from '../../hooks/useWorks'
import { WorkCard } from '../../components/WorkCard'

export function Home() {
  const { series, orderedByLikeSeries } = useSeries()

  orderedByLikeSeries.sort((a, b) => b.likes - a.likes)

  return (
    <Container className="slide-in-bottom">
      <h2>Histórias publicadas</h2>
      <CustomSeparator />
      <Works>
        <Carousel likeCarrousel={false} works={series} />
      </Works>

      <h2>Histórias mais curtidas</h2>
      <CustomSeparator />

      <Works>
        <Carousel likeCarrousel works={orderedByLikeSeries} />
      </Works>

      <FindWorks>
        <CustomSeparator />
        <h2>Mais obras</h2>
        <DiscoverWorks>
          {series.map((work) => (
            <WorkCard key={work.title} {...work} hasLikeIndicator={false} />
          ))}
        </DiscoverWorks>
      </FindWorks>
    </Container>
  )
}

import { LoadingElement } from '../../components/LoadingElement'
import { WorkCard } from '../../components/WorkCard'
import { useAuth } from '../../hooks/useAuth'
import { useSeries } from '../../hooks/useWorks'
import { Container, Series } from './styles'
import { SmileySad } from 'phosphor-react'

export function MyComics() {
  const { series } = useSeries()

  const { googleUser } = useAuth()

  const seriesByUser = series.filter(
    (item) => item?.user_id === googleUser?.email,
  )

  return (
    <Container>
      {!series && <LoadingElement isFullScreen={false} />}
      {series.length === 0 ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <SmileySad size={55} />
          <h1>Você não possui nenhuma história criada.</h1>
        </div>
      ) : (
        <div>
          <h2 className="slide-in-right">Minhas histórias</h2>
          <Series className="slide-in-top">
            {seriesByUser.map((item) => (
              <WorkCard key={item.title} hasLikeIndicator={false} {...item} />
            ))}
          </Series>
        </div>
      )}
    </Container>
  )
}

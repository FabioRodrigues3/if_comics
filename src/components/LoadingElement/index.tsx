import { Container } from './styles'
import LoadingGif from '../../assets/loading-gif.gif'

export function LoadingElement({
  isFullScreen = false,
}: {
  isFullScreen: boolean
}) {
  return (
    <Container className="slide" isFullscreen={isFullScreen}>
      <div>
        <img src={LoadingGif} />
        <h2>Carregando...</h2>
      </div>
    </Container>
  )
}

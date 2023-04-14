import { Container } from './styles'
import LoadingGif from '../../assets/loading-gif.gif'

export function LoadingElement() {
  return (
    <Container>
      <img src={LoadingGif} />
    </Container>
  )
}

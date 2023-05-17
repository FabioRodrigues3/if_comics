import { ReaderComponent } from '../../components/Reader'
import { useIdParam } from '../../hooks/useIdParam'
import { useParams } from 'react-router-dom'
import { useChapters } from '../../hooks/useChapters'
import { Container } from './styles'

export function Reader() {
  const { serie } = useIdParam()
  const { id } = useParams()
  const { chapter } = useChapters({ id })

  return (
    <Container>
      <h2>
        <span>Ch. {chapter.chapterNumber}: </span>
        {chapter.chapterTitle}
      </h2>
      <ReaderComponent content={chapter.fileUrl} />
    </Container>
  )
}

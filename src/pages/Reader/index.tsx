import { ReaderComponent } from '../../components/Reader'
import { useIdParam } from '../../hooks/useIdParam'
import { useParams } from 'react-router-dom'
import { useChapters } from '../../hooks/useChapters'
import { ChapterControl, Container } from './styles'
import { CaretLeft, CaretRight } from 'phosphor-react'

export function Reader() {
  const { id, comicId } = useParams()
  const { chapter, chapters } = useChapters({ id, comicId })

  return (
    <Container>
      <div>
        <h2>
          <span>Ch. {chapter.chapterNumber}: </span>
          {chapter.chapterTitle}
        </h2>
        <ChapterControl>
          <button>Capítulo anterior</button>
          <button>Próximo capítulo</button>
        </ChapterControl>
      </div>
      <ReaderComponent content={chapter.fileUrl} />
    </Container>
  )
}

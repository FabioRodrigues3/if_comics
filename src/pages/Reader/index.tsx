import { ReaderComponent } from '../../components/Reader'
import { useChapters } from '../../hooks/useChapters'
import { useIdParam } from '../../hooks/useIdParam'

export function Reader() {
  const { serie } = useIdParam()
  return (
    <>
      {serie.title} - por {serie.author}
      <ReaderComponent />
    </>
  )
}

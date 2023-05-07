import { ReaderComponent } from '../../components/Reader'
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

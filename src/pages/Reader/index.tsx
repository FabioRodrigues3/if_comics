import { useIdParam } from '../../hooks/useIdParam'

export function Reader() {
  const { serie } = useIdParam()

  return <h2>{serie.title}</h2>
}

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDate(date?: string) {
  const formattedData = format(new Date(date!), 'dd/M/yy', { locale: ptBR })

  return formattedData
}

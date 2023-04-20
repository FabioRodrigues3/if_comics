import { CardTitle, Container, Tag, TagContainer } from './styles'

interface InfoCardProps {
  cardTitle?: string
  content?: string
  type?: 'normal' | 'tag'
  tags?: string[]
}

export function InfoCard({
  cardTitle,
  content,
  type = 'normal',
  tags,
}: InfoCardProps) {
  return (
    <Container>
      <CardTitle>{cardTitle}</CardTitle>
      {type === 'normal' && <p>{content}</p>}
      {type === 'tag' && (
        <TagContainer>
          {tags?.map((item) => (
            <Tag>{item}</Tag>
          ))}
        </TagContainer>
      )}
    </Container>
  )
}

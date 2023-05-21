import {
  LikeButton,
  ToComicLink,
  WorkContainer,
  WorkCover,
  WorkInfo,
  WorkTitle,
} from './styles'
import { ThumbsUp } from 'phosphor-react'
import NoImage from '../../assets/sem-imagem.png'

export interface WorkCardProps {
  title?: string
  image?: string
  author?: string
  likes?: string | number
  hasLikeIndicator?: boolean
  imageUrl?: string | undefined
  id?: string
}
export function WorkCard({
  author,
  likes,
  title,
  id,
  hasLikeIndicator = true,
  imageUrl,
}: WorkCardProps) {
  return (
    <ToComicLink to={`/comic/${id}`}>
      <WorkContainer>
        <WorkCover image={imageUrl?.length!!! > 0 ? imageUrl : NoImage} />
        <WorkInfo>
          <WorkTitle>{title}</WorkTitle>
          <span>{author}</span>
        </WorkInfo>
        {hasLikeIndicator && (
          <LikeButton hasLikeIndicator>
            <ThumbsUp size={15} />
            {likes || 0}
          </LikeButton>
        )}
      </WorkContainer>
    </ToComicLink>
  )
}

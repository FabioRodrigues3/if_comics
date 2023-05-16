import {
  LikeButton,
  WorkContainer,
  WorkCover,
  WorkInfo,
  WorkTitle,
} from './styles'
import { ThumbsUp } from 'phosphor-react'
import NoImage from '../../assets/sem-imagem.png'
import { Link } from 'react-router-dom'

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
    <Link to={`/comic/${id}`}>
      <WorkContainer>
        <WorkCover image={imageUrl?.length!!! > 0 ? imageUrl : NoImage} />
        <WorkInfo>
          <WorkTitle>
            {title}
            <span>
              <LikeButton hasLikeIndicator={hasLikeIndicator}>
                <ThumbsUp size={15} />
                {likes}
              </LikeButton>
            </span>
          </WorkTitle>

          <span>{author}</span>
        </WorkInfo>
      </WorkContainer>
    </Link>
  )
}

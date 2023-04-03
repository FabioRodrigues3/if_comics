import {
  LikeButton,
  WorkContainer,
  WorkCover,
  WorkInfo,
  WorkTitle
} from './styles'
import { ThumbsUp } from 'phosphor-react'
import NoImage from '../../assets/sem-imagem.png'

export interface WorkCardProps {
  title?: string
  image?: string
  author?: string
  likes?: string | number
  hasLikeIndicator?: boolean
  link?: string
}
export function WorkCard({
  author,
  likes,
  title,
  image,
  hasLikeIndicator = true,
  link
}: WorkCardProps) {
  return (
    <a href="#">
      <WorkContainer>
        <WorkCover image={image?.length > 0 ? image : NoImage} />
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
    </a>
  )
}

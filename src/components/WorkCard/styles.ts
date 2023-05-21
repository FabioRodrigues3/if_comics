import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface WorkCardProps {
  image?: string | undefined | null
  hasLikeIndicator?: boolean
}

export const WorkContainer = styled.div`
  border-radius: 5px;
  width: fit-content;
  box-shadow: 0px 0px 2px black;
  background: white;
  flex-direction: column;
  justify-content: center;
  padding: 10px 10px;
  cursor: pointer;
  max-height: 500px;
  opacity: 0.9;
  transition: ease-in-out 0.5s;
  &:hover {
    opacity: 1;
    transition: ease-in-out 0.5s;
  }
`

export const ToComicLink = styled(Link)`
  padding: 1rem 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WorkCover = styled.div<WorkCardProps>`
  object-fit: fill;
  height: 300px;
  width: 200px;
  max-height: 300px;
  background: url(${(props) => props.image}) no-repeat center;
  background-size: cover;
  border-radius: 8px;
`

export const WorkTitle = styled.p`
  background-color: white;
  max-width: 200px;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  text-align: center;
  font-size: 1rem;
  margin: 0;
  border-radius: 3px;
  width: 100%;
`

export const WorkInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3px;

  span {
    display: flex;
    font-size: 0.7rem;
    align-items: center;
    gap: 0.2rem;
  }
`

export const LikeButton = styled.div<WorkCardProps>`
  display: flex;
  display: ${(props) => !props.hasLikeIndicator && 'none'};
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  svg {
    color: green;
  }
`

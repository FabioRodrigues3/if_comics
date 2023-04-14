import styled from 'styled-components';

interface WorkCardProps {
  image?: string;
  hasLikeIndicator?: boolean;
}

export const WorkContainer = styled.div`
  border-radius: 5px;
  width: fit-content;
  box-shadow: 0px 0px 2px black;
  background: white;
  flex-direction: column;
  padding: 10px 10px;
  cursor: pointer;
`;

export const WorkCover = styled.div<WorkCardProps>`
  height: 300px;
  width: 200px;
  background: url(${(props) => props.image}) no-repeat center;
  background-size: cover;
  border-radius: 8px;
`;

export const WorkTitle = styled.p`
  background-color: white;
  align-items: center;
  display: flex;
  gap: 0.3rem;
  font-size: 1rem;
  margin: 0;
  border-radius: 3px;
  width: 100%;
`;

export const WorkInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px;

  span {
    display: flex;
    font-size: 0.7rem;
    align-items: center;
    gap: 0.2rem;
  }
`;

export const LikeButton = styled.div<WorkCardProps>`
  display: flex;
  display: ${(props) => !props.hasLikeIndicator && 'none'};
  align-items: center;
  gap: 0.2rem;

  svg {
    color: green;
  }
`;

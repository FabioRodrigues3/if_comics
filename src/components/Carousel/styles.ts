import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'

export const DefaultCaroussel = styled(Carousel)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  margin: 0;
  flex-wrap: wrap;
  border-top: 1px solid #707070;
  border-bottom: 1px solid #707070;

  button .control-next {
    background: blue;
  }

  li {
    width: min-content;
    object-fit: contain;
  }
`

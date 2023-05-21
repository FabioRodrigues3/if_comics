import styled, { css } from 'styled-components'

interface FullScreen {
  isFullscreen: boolean
}

export const Container = styled.div<FullScreen>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  h2 {
    text-align: center;
    color: white;
  }

  div {
    img {
      height: 200px;
      width: 200px;
    }
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  ${(props) =>
    props.isFullscreen &&
    css`
      position: absolute;
      height: 100vh;

      top: 0;
      bottom: 0;
      left: 0;
      z-index: 50;
      background-color: rgba(1, 1, 1, 1);
    `}

  img {
    height: 300px;
    width: 300px;
  }
`

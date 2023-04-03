import styled from 'styled-components'

interface ComicRegistrationProps {
  imageUploaded: boolean | Blob
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
`

export const FormBox = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  background: #c5c5c5;
  padding: 1rem 0;
  width: 100%;

  span {
    margin-bottom: 1rem;
  }
`

export const ImageBox = styled.div<ComicRegistrationProps>`
  display: flex;
  justify-content: center;

  padding: ${(props) => (!props.imageUploaded ? '3rem 3rem' : '0')};
  border: gray ${(props) => (props.imageUploaded ? 'none' : '2px dotted')};
  border-radius: 6px;
  input {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-between;
  }

  img {
    height: 350px;
    border-radius: 5px;
    width: fit-content;
  }
`

export const InformationBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  margin-top: 80px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.2rem;
    width: 100%;

    input {
      width: 100%;
      max-width: 450px;
      padding: 1rem;
    }
  }

  div:nth-child(2) {
    textarea {
      height: 300px;
      width: 500px;
      padding: 1rem;
      resize: none;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    background-color: #008080;
    color: white;
    padding: 1rem;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`
export const ImageRemove = styled.div`
  background: none;
  z-index: 20000;
  position: absolute;
  height: 350px;
  border-radius: 5px;
  &:hover {
    display: block;
  }
`

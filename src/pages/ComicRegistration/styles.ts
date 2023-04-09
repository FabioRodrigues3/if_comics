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

  input {
    border: none;
  }
`

export const FormBox = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background: #c5c5c5;
  padding: 2rem 0;
  width: 100%;

  span {
    margin-bottom: 1rem;
  }
`

export const ImageBox = styled.div<ComicRegistrationProps>`
  display: flex;
  justify-content: center;
  padding: ${(props) => (!props.imageUploaded ? '10rem 3rem' : '0')};
  border: gray ${(props) => (props.imageUploaded ? 'none' : '2px dotted')};
  border-radius: 6px;
  input {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 6px;
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
  gap: 1rem;
  flex: 1;
  margin-top: 80px;
  padding: 1rem 5rem 0 0;

  input {
    max-width: 450px;
    padding: 1rem;
    border-radius: 6px;
    border: none;
    outline: none;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.2rem;
    width: 100%;
  }

  div:nth-child(2) {
    textarea {
      height: 300px;
      width: 100%;
      padding: 1rem;
      resize: none;
      border-radius: 6px;
      border: none;
      outline: none;
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
  &:hover {
    background: rgba(0, 0, 0, 20%);
    z-index: 20000;
    position: absolute;
    height: 350px;
    border-radius: 5px;
  }
`
export const Image = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 0.1rem;
`

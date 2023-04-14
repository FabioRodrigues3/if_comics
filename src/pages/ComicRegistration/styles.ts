import styled from 'styled-components';

export const Container = styled.form`
  display: flex;

  width: 100%;
  flex-direction: column;
  h2 {
    font-weight: 500;
    color: #707070;
  }
`;

export const Title = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  background-color: #efefef;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 80px 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MainDescription = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 2rem;
`;

export const ImageUpload = styled.div`
  background-color: #efefef;
  border: gray dotted 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  gap: 0.5rem;
  width: 350px;
  color: #707070;
  border-radius: 30px;

  span {
    font-weight: 500;
    font-size: 20px;
    color: #cdcdcd;
  }

  input[type='file'] {
    display: none;
  }

  label {
    border: 1px solid black;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    background-color: #707070;
    border-radius: 15px;
    width: 100%;
    text-align: center;
    max-width: 120px;
    padding: 9px 70px;
    color: white;
    font-size: 30px;
    font-weight: 500;
    transition: 1s ease;
    border: none;

    &:hover {
      background-color: #5b5757;
    }
  }
`;

export const TitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 20px;
  gap: 20px;
  width: 100%;
  max-width: 650px;
`;

export const WorkTitle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;

  input {
    width: 100%;
    padding: 1rem;
    border-radius: 20px;
    border: 1px solid #707070;
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  textarea {
    resize: none;
    padding: 1rem;
    width: 100%;
    height: 304px;
    gap: 2rem;
    border-radius: 20px;
  }
`;

export const GenreSelector = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  flex-wrap: wrap;
  margin-right: 15rem;
  gap: 16px;

  input {
    display: none;
  }

  label {
    border: 1px solid gray;
    border-radius: 6px;
    padding: 0.2rem 1rem;
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

export const GenreTitle = styled.div`
  h3 {
    font-weight: 500;
  }
`;

export const Genres = styled.div`
  display: flex;
  gap: 2rem;
`;

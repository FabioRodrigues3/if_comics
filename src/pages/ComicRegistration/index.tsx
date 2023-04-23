import React, { useState } from 'react'
import {
  Container,
  Description,
  GenreSelector,
  ImageUpload,
  MainDescription,
  Title,
  TitleAndDescription,
  WorkTitle,
  Wrapper,
  Genres,
  GenreTitle,
} from './styles'
import { Upload } from 'phosphor-react'
import genre from './genres.json'
import { CreateComic } from '../../services/createComic'
import { v4 as uuid } from 'uuid'

export function ComicRegistration() {
  const [file, setFile] = useState<string>()

  async function comicRegistration() {
    const test = await CreateComic({
      description: 'O bichinho é brabo',
      id: uuid(),
      image: file,
      title: 'O assalto de fulaninho',
      likes: 0,
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <Container>
      <Title>
        <h2>Criação de história</h2>
        <button onClick={comicRegistration} type="button">
          Criar história
        </button>
      </Title>

      <Wrapper>
        <MainDescription>
          <ImageUpload>
            <Upload size={53} />

            <label>
              Upload
              <input type="file"></input>
            </label>
            <span>(500 x 500)</span>
          </ImageUpload>

          <TitleAndDescription>
            <WorkTitle>
              <span>Título</span>
              <input type="text" />
            </WorkTitle>

            <Description>
              <span>Descrição</span>
              <textarea></textarea>
            </Description>
          </TitleAndDescription>
        </MainDescription>

        <GenreSelector>
          <GenreTitle>
            <h3>Gênero</h3>
            <span>Selecione até 3 gêneros</span>
          </GenreTitle>
          <Genres>
            {genre.genres.map((item) => (
              <span>{item}</span>
            ))}
          </Genres>
        </GenreSelector>
      </Wrapper>
    </Container>
  )
}

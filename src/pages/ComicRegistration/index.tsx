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
import { Button } from '../../components/Button'
import { Upload } from 'phosphor-react'
import genre from './genres.json'

export function ComicRegistration() {
  const [file, setFile] = useState<Blob>()

  return (
    <Container>
      <Title>
        <h2>Criação de história</h2>
        <Button isNavigatable={false} title="Criar história"></Button>
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
            {Object.values(genre.genres).map((item) => (
              <label>
                {item}
                <input type="checkbox" />
              </label>
            ))}
          </Genres>
        </GenreSelector>
      </Wrapper>
    </Container>
  )
}

import { Trash, Upload } from 'phosphor-react'
import {
  Container,
  ImageUpload,
  MainDescription,
  RemoveFile,
  Title,
  TitleAndDescription,
  WorkTitle,
  Wrapper,
} from './styles'
import React, { useState } from 'react'
import { Button } from '../../components/Button'

export function ChapterRegistration() {
  const [file, setFile] = useState<string>()
  console.log(file)

  if (file) console.log(URL.createObjectURL(file))

  return (
    <Container>
      <Title>
        <h2>Publicação de capítulo</h2>
        <Button title="Publicar capítulo" isNavigatable={false} />
      </Title>

      <Wrapper>
        <MainDescription>
          <ImageUpload>
            {file ? (
              <RemoveFile>
                <Trash size={50} />
                <span onClick={() => setFile(null)}>
                  Clique para remover o arquivo
                </span>
                <p>{file?.name}</p>
              </RemoveFile>
            ) : (
              <>
                <Upload size={53} />
                <label>
                  Upload
                  <input
                    onChange={(e) => setFile(e.target.files[0])}
                    type="file"
                    accept=".pdf"
                  ></input>
                </label>
                <span>(Apenas PDF)</span>
              </>
            )}
          </ImageUpload>

          <TitleAndDescription>
            <WorkTitle>
              <span>Título do capítulo</span>
              <input type="text" />
            </WorkTitle>

            <WorkTitle>
              <span>Númer do capítulo</span>
              <input type="number" min={0} max={9999} />
            </WorkTitle>
          </TitleAndDescription>
        </MainDescription>
      </Wrapper>
    </Container>
  )
}

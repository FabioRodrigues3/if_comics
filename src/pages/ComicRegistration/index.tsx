import React, { useState } from 'react'
import {
  Container,
  FormBox,
  Image,
  ImageBox,
  ImageRemove,
  InformationBox,
  Wrapper,
} from './styles'

export function ComicRegistration() {
  const [file, setFile] = useState<Blob>()

  return (
    <Container>
      <Wrapper>
        <h2>Criação de história</h2>
        <FormBox>
          <Image>
            <span>Capa da obra</span>
            <ImageBox imageUploaded={file}>
              {!file && (
                <input
                  onChange={(e) => {
                    setFile(e.target.files[0])
                  }}
                  accept="image/*"
                  type="file"
                />
              )}
              {file && (
                <div>
                  <ImageRemove onClick={() => setFile(null)}>
                    <h3>Clique para remover a imagem.</h3>
                  </ImageRemove>
                  <img src={URL.createObjectURL(file)} alt="Imagem da obra" />
                </div>
              )}
            </ImageBox>
          </Image>

          <InformationBox>
            <div>
              <label htmlFor="title">Título</label>
              <input type="text" max={500} />
            </div>

            <div>
              <label htmlFor="description">Descrição</label>
              <textarea
                placeholder="Escreva sua descrição aqui"
                draggable={false}
                maxLength={500}
                name="description"
              ></textarea>
            </div>
          </InformationBox>
        </FormBox>
      </Wrapper>
    </Container>
  )
}

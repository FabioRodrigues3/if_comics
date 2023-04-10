import { Prohibit } from 'phosphor-react'
import React, { useState } from 'react'
import {
  Container,
  FormBox,
  Image,
  ImageBox,
  ImageContainer,
  InformationBox,
  Overlay,
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
                <ImageContainer onClick={() => setFile(null)}>
                  <Overlay>
                    <div>
                      <Prohibit size={30} />
                      <h3>Clique para remover a imagem.</h3>
                    </div>
                  </Overlay>
                  <img src={URL.createObjectURL(file)} alt="Imagem da obra" />
                </ImageContainer>
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

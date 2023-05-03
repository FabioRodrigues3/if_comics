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
import { CreateComic, CreateComicProps } from '../../services/createComic'
import { v4 as uuid } from 'uuid'
import { useForm } from 'react-hook-form'
import { getComicsProps } from '../../services/getComicById'
import { Button } from '../../components/Button'
import { auth } from '../../utils/firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'

export function ComicRegistration() {
  const [file, setFile] = useState<string>()
  const [user] = useAuthState(auth)

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      imageFile: file,
      title: '',
      description: '',
    },
  })

  console.log(user?.uid)

  async function comicRegistration(data) {
    try {
      if (user) {
        await CreateComic({
          id: uuid(),
          description: data.description,
          author: user.displayName,
          title: data.title,
          user_id: user?.email,
        }).catch((err) => {
          console.log(err)
        })
      }
    } catch (error) {}

    reset()
  }

  return (
    <Container onSubmit={handleSubmit(comicRegistration)}>
      <Title>
        <h2>Criação de história</h2>
        <Button title="Criar história" isNavigatable={false}></Button>
      </Title>

      <Wrapper>
        <MainDescription>
          <ImageUpload>
            <Upload size={53} />

            <label>
              Upload
              <input type="file" {...register('imageFile')} />
            </label>
            <span>(500 x 500)</span>
          </ImageUpload>

          <TitleAndDescription>
            <WorkTitle>
              <span>Título</span>
              <input required type="text" {...register('title')} />
            </WorkTitle>

            <Description>
              <span>Descrição</span>
              <textarea required {...register('description')}></textarea>
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

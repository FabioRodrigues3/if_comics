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
  Image,
} from './styles'
import { CheckCircle, Upload } from 'phosphor-react'
import genre from './genres.json'
import { CreateComic } from '../../services/createComic'
import { v4 as uuid } from 'uuid'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import { auth } from '../../utils/firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Modal } from '../../components/Modal'

export function ComicRegistration() {
  const [file, setFile] = useState()
  const [user] = useAuthState(auth)
  const [modal, setModal] = useState(false)

  const { register, handleSubmit, reset } = useForm({})
  async function comicRegistration(data) {
    try {
      await CreateComic({
        image: file,
        id: uuid(),
        description: data.description,
        author: user?.displayName,
        title: data.title,
        user_id: user?.email,
      })
        .then(() => {
          setModal(true)
        })
        .catch((err) => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }

    reset()
  }

  return (
    <Container
      encType="multipart/form-data"
      onSubmit={handleSubmit(comicRegistration)}
    >
      <Modal
        openModal={modal}
        title="O capítulo foi criado com sucesso!"
        image={<CheckCircle size={50} color="black" />}
      />
      <Title>
        <h2>Criação de história</h2>
        <Button title="Criar história" isNavigatable={false}></Button>
      </Title>

      <Wrapper>
        <MainDescription>
          {file ? (
            <Image>
              <img src={URL.createObjectURL(file)} />
            </Image>
          ) : (
            <ImageUpload>
              <Upload size={53} />
              <label>
                Upload
                <input
                  type="file"
                  accept="image/*"
                  {...(register(' '),
                  {
                    onChange(event) {
                      setFile(event.target.files[0])
                      console.log('oidasddsa')
                    },
                  })}
                  name="image"
                />
              </label>
              <span>(500 x 500)</span>
            </ImageUpload>
          )}

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

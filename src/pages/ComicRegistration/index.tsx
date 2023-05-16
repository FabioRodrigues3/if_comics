import React, { useState, useEffect } from 'react'
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
  OverlayImage,
  OverlayText,
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
import { socket } from '../../utils/socketio'
import { useNavigate } from 'react-router-dom'

export function ComicRegistration() {
  const [file, setFile] = useState()
  const [user] = useAuthState(auth)
  const [modal, setModal] = useState(false)
  const navigation = useNavigate()
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

  useEffect(() => {
    if (modal) {
      setTimeout(() => {
        setModal(false)
        navigation('/')
        window.location.reload()
      }, 3000)
    }
  }, [modal, navigation])

  return (
    <Container
      className="slide-in-right"
      encType="multipart/form-data"
      onSubmit={handleSubmit(comicRegistration)}
    >
      <Modal
        openModal={modal}
        title="Sua história foi criada com sucesso! Acesse o menu do administrador e adicione sua história."
        image={<CheckCircle size={50} color="black" />}
      />
      <Title>
        <h2>Criação de história</h2>
        <Button title="Criar história" isNavigatable={false}></Button>
      </Title>

      <Wrapper>
        <MainDescription>
          {file ? (
            <Image onClick={() => setFile(null)}>
              <OverlayText>Para remover, clique na imagem</OverlayText>
              <img
                key={file}
                className="slide-in-blurred-top"
                src={URL.createObjectURL(file)}
              />
            </Image>
          ) : (
            <ImageUpload>
              <Upload size={53} />
              <label>
                Upload
                <input
                  type="file"
                  accept="image/*"
                  {...(register('image'),
                  {
                    onChange(event) {
                      setFile(event.target.files[0])
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
      </Wrapper>
    </Container>
  )
}

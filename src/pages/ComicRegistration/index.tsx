import { useState, useEffect, useCallback } from 'react'
import {
  Container,
  Description,
  ImageUpload,
  MainDescription,
  Title,
  TitleAndDescription,
  WorkTitle,
  Wrapper,
  Image,
  OverlayText,
  Genres,
  GenreCheckboxes,
} from './styles'
import { CheckCircle, Upload } from 'phosphor-react'
import { CreateComic } from '../../services/createComic'
import { v4 as uuid } from 'uuid'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import { auth } from '../../utils/firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Modal } from '../../components/Modal'
import { useNavigate } from 'react-router-dom'
import { LoadingElement } from '../../components/LoadingElement'

export function ComicRegistration() {
  const [file, setFile] = useState<File>()
  const [user] = useAuthState(auth)
  const [comicGenre, setComicGenre] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)
  const navigation = useNavigate()
  const { register, handleSubmit, reset } = useForm({})

  const genres = [
    'Ação',
    'Realidade',
    'Fantasia',
    'Ecchi',
    'Super-Herói',
    'Esportes',
    'Slice of Life',
    'Terror',
    'Anos 90',
    'Anos 80',
    'Drama',
    'Romance',
  ]

  const setGenres = useCallback(
    (genre: string) => {
      const identifyIfRemoved = comicGenre.some((item) => item === genre)
      if (identifyIfRemoved) {
        const genreThatWillBeRemoved = comicGenre.indexOf(genre)
        comicGenre.splice(genreThatWillBeRemoved, 1)
      } else {
        setComicGenre((state) => [genre, ...state])
      }
    },
    [comicGenre],
  )

  async function comicRegistration(data: {
    description?: string
    title?: string
  }) {
    setLoading(true)

    try {
      await CreateComic({
        image: file,
        id: uuid(),
        description: data.description,
        author: user?.displayName,
        title: data.title,
        user_id: user?.email,
        genres: String(comicGenre),
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
        navigation('/admin/my-comics')
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
      {loading && <LoadingElement isFullScreen={true} />}
      <Modal
        openModal={modal}
        title="Sua história foi criada com sucesso."
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
                key={file.name}
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
                  required
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
              <input required min={5} type="text" {...register('title')} />
            </WorkTitle>

            <Description>
              <span>Descrição</span>
              <textarea
                maxLength={350}
                required
                {...register('description')}
              ></textarea>
            </Description>
          </TitleAndDescription>
        </MainDescription>

        <Genres>
          <h2>Gêneros</h2>
          <GenreCheckboxes>
            {genres.map((item) => (
              <div key={item}>
                <label>
                  <input
                    required={!comicGenre}
                    value={item}
                    onClick={() => setGenres(item)}
                    type="checkbox"
                  />
                  {item}
                </label>
              </div>
            ))}
          </GenreCheckboxes>
        </Genres>
      </Wrapper>
    </Container>
  )
}

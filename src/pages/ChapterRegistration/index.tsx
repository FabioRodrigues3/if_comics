import { Check, CheckCircle, Trash, Upload } from 'phosphor-react'
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
import React, { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { useIdParam } from '../../hooks/useIdParam'
import { useForm } from 'react-hook-form'
import { CreateChapters } from '../../services/createChapters'
import { v4 as uuid } from 'uuid'
import { Modal } from '../../components/Modal'
import { useNavigate } from 'react-router-dom'
import { LoadingElement } from '../../components/LoadingElement'

export function ChapterRegistration() {
  const [file, setFile] = useState<FileList>()
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const { serie } = useIdParam()
  const navigate = useNavigate()

  const { reset, handleSubmit, register } = useForm({})

  async function handleChapterSubmit(data: {
    chapterTitle?: string
    chapterNumber?: string
  }) {
    setLoading(true)

    try {
      await CreateChapters({
        pdfFile: file,
        chapterTitle: data.chapterTitle,
        chapterNumber: data.chapterNumber,
        comicId: serie?.id,
      }).then(() => {
        setModal(true)
        setLoading(false)
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
        navigate(-1)
      }, 2500)
    }
  }, [modal, navigate])

  return (
    <Container
      encType="multipart/form-data"
      onSubmit={handleSubmit(handleChapterSubmit)}
    >
      {loading && <LoadingElement isFullScreen={true} />}
      <Title>
        <h2>Publicação de capítulo</h2>
        <Button title="Publicar capítulo" isNavigatable={false} />
      </Title>

      <Wrapper>
        <Modal
          title="Capítulo adicionado com sucesso"
          image={<CheckCircle size={50} />}
          openModal={modal}
        />
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
                    type="file"
                    accept=".pdf"
                    name="pdfFile"
                    {...(register('pdfFile'),
                    {
                      onChange(e) {
                        setFile(e.target.files[0])
                      },
                    })}
                  />
                </label>
                <span>(Apenas PDF)</span>
              </>
            )}
          </ImageUpload>

          <TitleAndDescription>
            <WorkTitle>
              <span>Título do capítulo</span>
              <input type="text" required {...register('chapterTitle')} />
            </WorkTitle>

            <WorkTitle>
              <span>Número do capítulo</span>
              <input
                type="number"
                required
                min={0}
                max={9999}
                {...register('chapterNumber')}
              />
            </WorkTitle>
          </TitleAndDescription>
        </MainDescription>
      </Wrapper>
    </Container>
  )
}
